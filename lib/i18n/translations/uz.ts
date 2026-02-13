import type { Translations } from "../types";

export const uz: Translations = {
  nav: {
    device: "Qurilma",
    about: "Mahsulot",
    features: "Imkoniyatlar",
    requirements: "Talablar",
    contact: "Aloqa",
    menu: "Menyu",
  },

  hero: {
    badge: "LiDAR skanlarini VR-vizualizatsiya qilish",
    title: "Urban",
    titleAccent: "Scan",
    subtitle:
      "Haqiqatga qadam qo'ying. 3D-skanni yuklang — va VR da xuddi o'zingiz u yerda bo'lgandek yuring.",
    cta: "Batafsil",
    ctaSecondary: "Bog'lanish",
    scrollAriaLabel: "Pastga aylantirish",
  },

  device: {
    badge: "Asosiy qurilma",
    title: "Share S20",
    titleAccent: "SLAM",
    description:
      "UrbanScan bilan ishlaydigan qo'l 3D-skaneri. Uni qo'lingizga oling, xona bo'ylab yuring — qurilma o'zi fazoning aniq raqamli nusxasini yaratadi.",
    specs: [
      { label: "SLAM-skanerlash", value: "Xonaning onlayn 3D-xaritasi" },
      { label: "Tezlik", value: "To'liq skan 5–15 daqiqada" },
      { label: "Og'irlik", value: "Yengil, bir qo'lda ushlanadi" },
      { label: "Batareya", value: "Bir necha soat ishlaydi" },
      { label: "Ma'lumot uzatish", value: "USB-C orqali noutbukga ulanish" },
      { label: "Qayta ishlash", value: "Share dasturida avtomatik" },
    ],
  },

  about: {
    title: "UrbanScan nima?",
    subtitle:
      "Biz haqiqiy xonalarni virtual sayrga aylantiramiz. Faqat uch qadam.",
    imageCaption: "Skanerlash natijasi — binoning aniq raqamli nusxasi",
    step: "Qadam",
    workflow: [
      {
        title: "Xonani skanerlaymiz",
        description:
          "Qurilma bilan ob'yekt bo'ylab yuramiz — u atrofni o'zi eslab qoladi.",
      },
      {
        title: "Dasturga yuklaymiz",
        description:
          "Qurilmani kompyuterga ulaymiz — fayl bitta tugma bilan ochiladi.",
      },
      {
        title: "VR da ko'ramiz",
        description:
          "Shlem kiyamiz — va ob'yekt bo'ylab xuddi o'zimiz u yerda bo'lgandek yuramiz.",
      },
    ],
  },

  features: {
    title: "Nima uchun qulay",
    subtitle:
      "Biznesingiz uchun haqiqiy afzalliklar — murakkab texnologiyalarsiz.",
    items: [
      {
        title: "Ob'yektga borish shart emas",
        description:
          "Mijozga bino, ombor yoki qurilish maydonini — ofisdan chiqmasdan ko'rsating. Bir marta skanlang, cheksiz marta ko'rsating.",
      },
      {
        title: "Hayratlanarli taqdimotlar",
        description:
          "Buyurtmachi shlem kiyadi va ob'yekt bo'ylab o'zi yuradi. Bu har qanday surat, chizma yoki videodan ko'ra ko'proq ishontiradi.",
      },
      {
        title: "Vaqt va pulni tejash",
        description:
          "Takroriy sayohatlar tashkil qilish shart emas. Skanerlash bir necha daqiqa davom etadi, natija istalgan paytda mavjud.",
      },
      {
        title: "Istalgan joydan kirish",
        description:
          "Ob'yekt boshqa shahardami? Muammo emas. Faylni yuboring — hamkasblar yoki mijozlar hamma narsani VR da o'z ko'zlari bilan ko'radi.",
      },
      {
        title: "Hammaga tushunarli",
        description:
          "Chizmalarni tushunish shart emas. Har qanday odam shlem kiyib, fazo qanday ko'rinishini darhol tushunadi.",
      },
      {
        title: "Haqiqatning aniq nusxasi",
        description:
          "Skaner xonaning batafsil 3D-nusxasini yaratadi. VR da ob'yektning haqiqiy o'lchamlari, nisbatlari va tafsilotlarini ko'rasiz.",
      },
    ],
  },

  requirements: {
    title: "Tizim talablari",
    subtitle: "Ikki qurilma — skanerlash va VR-ko'rish uchun.",
    table: {
      component: "Komponent",
      minimum: "Minimal",
      recommended: "Tavsiya etilgan",
      futureProof: "Zaxira",
    },
    laptop: {
      title: "Noutbuk (skanerlash)",
      subtitle: "Faqat Share S20 SLAM dasturi — Unity va VR siz",
      specs: [
        { component: "CPU", minimum: "Intel Core i7 10–12 gen / Ryzen 7 4800H–5800H", recommended: "Intel Core i7 12–13 gen / Ryzen 7 6800H" },
        { component: "RAM", minimum: "16 GB", recommended: "32 GB" },
        { component: "GPU", minimum: "Har qanday diskret / o'rnatilgan", recommended: "Har qanday diskret" },
        { component: "SSD", minimum: "NVMe 1 TB", recommended: "NVMe 1–2 TB" },
        { component: "Portlar", minimum: "USB 3.0 / USB-C", recommended: "USB 3.0 / USB-C" },
        { component: "OT", minimum: "Windows 10/11 64-bit", recommended: "Windows 10/11 64-bit" },
      ],
    },
    desktop: {
      title: "Ish stoli (VR)",
      subtitle: "Unity-ilova + OBJ import + VR-sayohat",
      specs: [
        { component: "CPU", minimum: "Ryzen 5 5600 / i5-12400", recommended: "Ryzen 7 7700 / i7-12700", futureProof: "Ryzen 9 7900X / i9-13900" },
        { component: "GPU", minimum: "RTX 3060 (12 GB)", recommended: "RTX 4070", futureProof: "RTX 4080" },
        { component: "RAM", minimum: "16 GB", recommended: "32 GB", futureProof: "64 GB" },
        { component: "SSD", minimum: "NVMe 1 TB", recommended: "NVMe 1–2 TB", futureProof: "NVMe 2 TB" },
        { component: "OT", minimum: "Windows 10/11 64-bit", recommended: "Windows 10/11 64-bit" },
        { component: "VR", minimum: "PCVR (OpenXR / SteamVR)", recommended: "PCVR (OpenXR / SteamVR)" },
      ],
    },
  },

  contact: {
    title: "Skanlaringizni VR da ko'rishga tayyormisiz?",
    subtitle:
      "UrbanScan ni ish jarayoningizga joriy qilishni muhokama qilish uchun biz bilan bog'laning.",
    company: "iMax IT Company",
    phone: "+998 91 255 52 60",
    copyright: "UrbanScan. Barcha huquqlar himoyalangan.",
  },
};
