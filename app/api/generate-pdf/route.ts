import puppeteer from "puppeteer";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  /* Язык из query-параметра: ?lang=ru или ?lang=uz (по умолчанию uz) */
  const lang = request.nextUrl.searchParams.get("lang") === "ru" ? "ru" : "uz";

  let browser;

  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

    /* Широкий viewport — презентационный формат 16:9 */
    await page.setViewport({ width: 1920, height: 1080 });

    /* Устанавливаем localStorage ДО загрузки страницы, чтобы React подхватил нужный язык */
    await page.evaluateOnNewDocument((locale: string) => {
      localStorage.setItem("urbanscan-locale", locale);
    }, lang);

    /* Открываем сайт и ждём загрузки всех ресурсов (картинки, шрифты) */
    await page.goto("http://localhost:3000", {
      waitUntil: "networkidle0",
      timeout: 30000,
    });

    /* Эмулируем screen (не print) чтобы сохранить все стили */
    await page.emulateMediaType("screen");

    /* Прячем навигацию и точки — в PDF они не нужны */
    await page.evaluate(() => {
      /* Navbar */
      document.querySelector("nav")?.setAttribute("style", "display:none!important");
      /* SlideDots */
      const dots = document.querySelector("[class*='fixed'][class*='right-']");
      if (dots) (dots as HTMLElement).style.display = "none";
      /* Стрелка скролла на Hero — последняя кнопка внутри #hero */
      const heroSlide = document.getElementById("hero");
      if (heroSlide) {
        const buttons = heroSlide.querySelectorAll(":scope > button");
        const arrow = buttons[buttons.length - 1];
        if (arrow) (arrow as HTMLElement).style.display = "none";
      }

      /* Разворачиваем scroll-snap контейнер, чтобы все слайды были видны */
      const container = document.querySelector(".fullpage-container");
      if (container) {
        (container as HTMLElement).style.overflow = "visible";
        (container as HTMLElement).style.height = "auto";
        (container as HTMLElement).style.scrollSnapType = "none";
      }

      /* Каждый слайд — ровно 1080px (фиксированная высота = viewport) */
      document.querySelectorAll(".slide").forEach((slide) => {
        const el = slide as HTMLElement;
        el.style.height = "1080px";
        el.style.minHeight = "1080px";
        el.style.scrollSnapAlign = "none";
      });

      /*
       * Framer Motion: элементы с whileInView остаются opacity:0
       * пока не попадут в viewport. В PDF-режиме viewport = 1080px,
       * а контейнер развёрнут → слайды 2+ за экраном → невидимы.
       * Принудительно делаем ВСЕ анимированные элементы видимыми.
       */
      document.querySelectorAll("[style*='opacity']").forEach((el) => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.opacity = "1";
        htmlEl.style.transform = "none";
      });

      /* Также ловим элементы через data-атрибуты Framer Motion */
      document.querySelectorAll("div[style]").forEach((el) => {
        const htmlEl = el as HTMLElement;
        const style = htmlEl.style;
        if (style.opacity === "0" || parseFloat(style.opacity) < 1) {
          style.opacity = "1";
          style.transform = "none";
        }
      });
    });

    /* Пауза чтобы стили применились */
    await new Promise((r) => setTimeout(r, 500));

    /*
     * Скроллим до каждого слайда чтобы Framer Motion
     * триггернул whileInView анимации, потом возвращаемся наверх
     */
    const slideCount = await page.$$eval(".slide", (slides) => slides.length);
    for (let i = 0; i < slideCount; i++) {
      await page.evaluate((index) => {
        const slide = document.querySelectorAll(".slide")[index];
        if (slide) slide.scrollIntoView();
      }, i);
      await new Promise((r) => setTimeout(r, 400));
    }

    /* После всех триггеров — ещё раз принудительно убираем opacity:0 */
    await page.evaluate(() => {
      document.querySelectorAll("div[style]").forEach((el) => {
        const htmlEl = el as HTMLElement;
        if (parseFloat(htmlEl.style.opacity) < 1) {
          htmlEl.style.opacity = "1";
          htmlEl.style.transform = "none";
        }
      });
    });

    /* Финальная пауза */
    await new Promise((r) => setTimeout(r, 1000));

    /* Генерируем PDF: landscape, A4, без полей, с фоном */
    const pdf = await page.pdf({
      width: "1920px",
      height: "1080px",
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });

    await browser.close();

    return new NextResponse(Buffer.from(pdf), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename=UrbanScan-Presentation-${lang.toUpperCase()}.pdf`,
      },
    });
  } catch (error) {
    if (browser) await browser.close();
    console.error("PDF generation error:", error);
    return NextResponse.json(
      { error: "Не удалось сгенерировать PDF" },
      { status: 500 }
    );
  }
}
