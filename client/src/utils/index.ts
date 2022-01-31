import { books } from "../navigation/books";

export const getHeadersLinks = () => {
  return Object.values(books).filter(({ isHeaderLink }) => isHeaderLink);
};
