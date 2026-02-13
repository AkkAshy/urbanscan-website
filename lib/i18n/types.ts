export type Locale = "uz" | "ru";

export interface TranslationSpec {
  label: string;
  value: string;
}

export interface TranslationWorkflowStep {
  title: string;
  description: string;
}

export interface TranslationFeature {
  title: string;
  description: string;
}

export interface TranslationRequirementRow {
  component: string;
  minimum: string;
  recommended: string;
  futureProof?: string;
}

export interface Translations {
  /* Навигация */
  nav: {
    device: string;
    about: string;
    features: string;
    requirements: string;
    contact: string;
    menu: string;
  };

  /* Hero */
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
    scrollAriaLabel: string;
  };

  /* Device */
  device: {
    badge: string;
    title: string;
    titleAccent: string;
    description: string;
    specs: TranslationSpec[];
  };

  /* About */
  about: {
    title: string;
    subtitle: string;
    imageCaption: string;
    step: string;
    workflow: TranslationWorkflowStep[];
  };

  /* Features */
  features: {
    title: string;
    subtitle: string;
    items: TranslationFeature[];
  };

  /* Requirements */
  requirements: {
    title: string;
    subtitle: string;
    table: {
      component: string;
      minimum: string;
      recommended: string;
      futureProof: string;
    };
    laptop: {
      title: string;
      subtitle: string;
      specs: TranslationRequirementRow[];
    };
    desktop: {
      title: string;
      subtitle: string;
      specs: TranslationRequirementRow[];
    };
  };

  /* Contact */
  contact: {
    title: string;
    subtitle: string;
    company: string;
    phone: string;
    copyright: string;
  };
}
