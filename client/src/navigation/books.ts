export interface IBook {
  to: string;
  link: string;
  isHeaderLink: boolean;
  hasDropdown: boolean;
}

export interface IBooks {
  [key: string]: {
    to: string;
    link: string;
    isHeaderLink: boolean;
    hasDropdown: boolean;
  };
}

export const books: IBooks = {
  home: { to: "/", link: "О нас", isHeaderLink: true, hasDropdown: false },
  services: {
    to: "services",
    link: "Услуги",
    isHeaderLink: true,
    hasDropdown: true,
  },
  vacancies: {
    to: "vacancies",
    link: "Вакансии",
    isHeaderLink: true,
    hasDropdown: false,
  },
  news: { to: "news", link: "Новости", isHeaderLink: true, hasDropdown: false },
  agreements: {
    to: "agreements",
    link: "Соглашения",
    isHeaderLink: true,
    hasDropdown: true,
  },
  footersAndHeaders: {
    to: "ui/footers-and-headers",
    link: "Хедеры и Футеры",
    isHeaderLink: false,
    hasDropdown: false,
  },
} as const;
