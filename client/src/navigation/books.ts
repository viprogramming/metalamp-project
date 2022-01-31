export interface IBook {
  to: string;
  link: string;
  isHeaderLink: boolean;
}

export interface IBooks {
  [key: string]: {
    to: string;
    link: string;
    isHeaderLink: boolean;
  };
}

export const books: IBooks = {
  home: { to: "/", link: "О нас", isHeaderLink: true },
  services: { to: "services", link: "Услуги", isHeaderLink: true },
  vacancies: { to: "vacancies", link: "Вакансии", isHeaderLink: true },
  news: { to: "news", link: "Новости", isHeaderLink: true },
  agreements: { to: "agreements", link: "Соглашения", isHeaderLink: true },
  footersAndHeaders: {
    to: "ui/footers-and-headers",
    link: "Хедеры и Футеры",
    isHeaderLink: false,
  },
} as const;
