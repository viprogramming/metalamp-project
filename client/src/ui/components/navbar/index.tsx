import { Link } from "react-router-dom";

import styled from "styled-components";

import { IBook } from "../../../navigation/books";

const SNav = styled.nav`
  display: flex;
`;

const SNavLink = styled(Link)`
  color: rgba(31, 32, 65, 0.5);
  text-decoration: none;
  &.active {
    color: rgba(31, 32, 65, 0.75);
  }
  & + & {
    margin-left: 20px;
  }
`;

interface Props {
  links: IBook[];
}

const NavBar = ({ links }: Props) => {
  return (
    <SNav>
      {links.map((book) => (
        <SNavLink to={book.to}>{book.link}</SNavLink>
      ))}
    </SNav>
  );
};

export default NavBar;
