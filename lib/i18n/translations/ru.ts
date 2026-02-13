import type { Translations } from "../types";

export const ru: Translations = {
  nav: {
    device: "Устройство",
    about: "О продукте",
    features: "Возможности",
    requirements: "Требования",
    contact: "Контакты",
    menu: "Меню",
  },

  hero: {
    badge: "VR-визуализация LiDAR-сканов",
    title: "Urban",
    titleAccent: "Scan",
    subtitle:
      "Шагните в реальность. Загрузите 3D-скан — и пройдитесь по нему в VR, как будто вы там.",
    cta: "Узнать больше",
    ctaSecondary: "Связаться с нами",
    scrollAriaLabel: "Прокрутить вниз",
  },

  device: {
    badge: "Основное устройство",
    title: "Share S20",
    titleAccent: "SLAM",
    description:
      "Ручной 3D-сканер, с которым работает UrbanScan. Просто возьмите его в руку, пройдитесь по помещению — и прибор сам создаст точную цифровую копию пространства.",
    specs: [
      { label: "SLAM-сканирование", value: "Моментальная 3D-карта помещения" },
      { label: "Скорость", value: "Полный скан за 5–15 минут" },
      { label: "Вес", value: "Лёгкий, держится одной рукой" },
      { label: "Батарея", value: "На несколько часов работы" },
      { label: "Передача данных", value: "USB-C подключение к ноутбуку" },
      { label: "Обработка", value: "Автоматическая в родном ПО Share" },
    ],
  },

  about: {
    title: "Что такое UrbanScan?",
    subtitle:
      "Мы превращаем реальные помещения в виртуальные прогулки. Всего три шага.",
    imageCaption: "Результат сканирования — точная цифровая копия здания",
    step: "Шаг",
    workflow: [
      {
        title: "Сканируем помещение",
        description:
          "Проходим по объекту с прибором — он сам запоминает всё вокруг.",
      },
      {
        title: "Загружаем в программу",
        description:
          "Подключаем прибор к компьютеру — файл открывается одной кнопкой.",
      },
      {
        title: "Смотрим в VR",
        description:
          "Надеваем шлем — и гуляем по объекту, как будто мы там на самом деле.",
      },
    ],
  },

  features: {
    title: "Почему это удобно",
    subtitle:
      "Реальные преимущества для вашего бизнеса — без сложных технологий.",
    items: [
      {
        title: "Не нужно ехать на объект",
        description:
          "Покажите клиенту здание, склад или стройку — не выходя из офиса. Один раз отсканировали, показываете сколько угодно раз.",
      },
      {
        title: "Впечатляющие презентации",
        description:
          "Заказчик надевает шлем и сам гуляет по объекту. Это убеждает сильнее, чем любые фотографии, чертежи или видео.",
      },
      {
        title: "Экономия времени и денег",
        description:
          "Не нужно организовывать повторные выезды. Сканирование занимает минуты, а результат доступен в любой момент.",
      },
      {
        title: "Доступ из любой точки",
        description:
          "Объект в другом городе? Не проблема. Передайте файл — и коллеги или клиенты увидят всё своими глазами в VR.",
      },
      {
        title: "Понятно каждому",
        description:
          "Не нужно разбираться в чертежах. Любой человек наденет шлем и сразу поймёт, как выглядит пространство.",
      },
      {
        title: "Точная копия реальности",
        description:
          "Сканер создаёт детальную 3D-копию помещения. В VR вы видите реальные размеры, пропорции и детали объекта.",
      },
    ],
  },

  requirements: {
    title: "Системные требования",
    subtitle: "Два устройства — для сканирования и для VR-просмотра.",
    table: {
      component: "Компонент",
      minimum: "Минимум",
      recommended: "Рекомендуемые",
      futureProof: "Запас",
    },
    laptop: {
      title: "Ноутбук (сканирование)",
      subtitle: "Только ПО Share S20 SLAM — без Unity и VR",
      specs: [
        { component: "CPU", minimum: "Intel Core i7 10–12 gen / Ryzen 7 4800H–5800H", recommended: "Intel Core i7 12–13 gen / Ryzen 7 6800H" },
        { component: "RAM", minimum: "16 GB", recommended: "32 GB" },
        { component: "GPU", minimum: "Любая дискретная / встроенная", recommended: "Любая дискретная" },
        { component: "SSD", minimum: "NVMe 1 TB", recommended: "NVMe 1–2 TB" },
        { component: "Порты", minimum: "USB 3.0 / USB-C", recommended: "USB 3.0 / USB-C" },
        { component: "ОС", minimum: "Windows 10/11 64-bit", recommended: "Windows 10/11 64-bit" },
      ],
    },
    desktop: {
      title: "Десктоп (VR)",
      subtitle: "Unity-приложение + импорт OBJ + VR-прогулка",
      specs: [
        { component: "CPU", minimum: "Ryzen 5 5600 / i5-12400", recommended: "Ryzen 7 7700 / i7-12700", futureProof: "Ryzen 9 7900X / i9-13900" },
        { component: "GPU", minimum: "RTX 3060 (12 GB)", recommended: "RTX 4070", futureProof: "RTX 4080" },
        { component: "RAM", minimum: "16 GB", recommended: "32 GB", futureProof: "64 GB" },
        { component: "SSD", minimum: "NVMe 1 TB", recommended: "NVMe 1–2 TB", futureProof: "NVMe 2 TB" },
        { component: "ОС", minimum: "Windows 10/11 64-bit", recommended: "Windows 10/11 64-bit" },
        { component: "VR", minimum: "PCVR (OpenXR / SteamVR)", recommended: "PCVR (OpenXR / SteamVR)" },
      ],
    },
  },

  contact: {
    title: "Готовы увидеть свои сканы в VR?",
    subtitle:
      "Свяжитесь с нами, чтобы обсудить внедрение UrbanScan в ваш рабочий процесс.",
    company: "iMax IT Company",
    phone: "+998 91 255 52 60",
    copyright: "UrbanScan. Все права защищены.",
  },
};
