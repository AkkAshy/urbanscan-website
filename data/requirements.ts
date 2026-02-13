import type { SpecRow } from "@/components/shared/SpecTable";

export interface RequirementSet {
  id: "laptop" | "desktop";
  title: string;
  subtitle: string;
  specs: SpecRow[];
  showFutureProof: boolean;
}

export const requirements: RequirementSet[] = [
  {
    id: "laptop",
    title: "Ноутбук (сканирование)",
    subtitle: "Только ПО Share S20 SLAM — без Unity и VR",
    showFutureProof: false,
    specs: [
      {
        component: "CPU",
        minimum: "Intel Core i7 10–12 gen / Ryzen 7 4800H–5800H",
        recommended: "Intel Core i7 12–13 gen / Ryzen 7 6800H",
      },
      {
        component: "RAM",
        minimum: "16 GB",
        recommended: "32 GB",
      },
      {
        component: "GPU",
        minimum: "Любая дискретная / встроенная",
        recommended: "Любая дискретная",
      },
      {
        component: "SSD",
        minimum: "NVMe 1 TB",
        recommended: "NVMe 1–2 TB",
      },
      {
        component: "Порты",
        minimum: "USB 3.0 / USB-C",
        recommended: "USB 3.0 / USB-C",
      },
      {
        component: "ОС",
        minimum: "Windows 10/11 64-bit",
        recommended: "Windows 10/11 64-bit",
      },
    ],
  },
  {
    id: "desktop",
    title: "Десктоп (VR)",
    subtitle: "Unity-приложение + импорт OBJ + VR-прогулка",
    showFutureProof: true,
    specs: [
      {
        component: "CPU",
        minimum: "Ryzen 5 5600 / i5-12400",
        recommended: "Ryzen 7 7700 / i7-12700",
        futureProof: "Ryzen 9 7900X / i9-13900",
      },
      {
        component: "GPU",
        minimum: "RTX 3060 (12 GB)",
        recommended: "RTX 4070",
        futureProof: "RTX 4080",
      },
      {
        component: "RAM",
        minimum: "16 GB",
        recommended: "32 GB",
        futureProof: "64 GB",
      },
      {
        component: "SSD",
        minimum: "NVMe 1 TB",
        recommended: "NVMe 1–2 TB",
        futureProof: "NVMe 2 TB",
      },
      {
        component: "ОС",
        minimum: "Windows 10/11 64-bit",
        recommended: "Windows 10/11 64-bit",
      },
      {
        component: "VR",
        minimum: "PCVR (OpenXR / SteamVR)",
        recommended: "PCVR (OpenXR / SteamVR)",
      },
    ],
  },
];
