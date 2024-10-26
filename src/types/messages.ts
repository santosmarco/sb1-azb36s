import type { Paths } from "type-fest";

import type en from "../messages/en.json"

/*
export interface Messages {
  auth: {
    signIn: {
      title: string;
      description: string;
      emailLabel: string;
      emailPlaceholder: string;
      passwordLabel: string;
      passwordPlaceholder: string;
      forgotPassword: string;
      submit: string;
      noAccount: string;
      signUp: string;
    };
    signUp: {
      title: string;
      description: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      passwordLabel: string;
      passwordPlaceholder: string;
      confirmPasswordLabel: string;
      confirmPasswordPlaceholder: string;
      submit: string;
      haveAccount: string;
      signIn: string;
    };
  };
  dashboard: {
    title: string;
    welcome: string;
    stats: {
      totalRevenue: string;
      subscriptions: string;
      activeUsers: string;
      newCustomers: string;
      fromLastMonth: string;
    };
    overview: {
      title: string;
      revenue: string;
    };
    recentActivity: {
      title: string;
    };
  };
  profile: {
    title: string;
    description: string;
    personalInfo: {
      title: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      bioLabel: string;
      bioPlaceholder: string;
      bioDescription: string;
      submit: string;
    };
  };
  settings: {
    title: string;
    description: string;
    general: {
      title: string;
      notifications: {
        title: string;
        description: string;
      };
      language: {
        title: string;
        description: string;
        options: {
          en: string;
          es: string;
          fr: string;
          de: string;
        };
      };
      theme: {
        title: string;
        description: string;
        options: {
          light: string;
          dark: string;
          system: string;
        };
      };
      submit: string;
    };
  };
  common: {
    backToHome: string;
    loading: string;
    error: string;
    success: string;
    save: string;
    cancel: string;
    delete: string;
    edit: string;
    view: string;
    close: string;
  };
}
*/

export type Messages = Paths<typeof en>