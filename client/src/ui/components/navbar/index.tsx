import { NavLink } from "react-router-dom";

import styled from "styled-components";

import { IBook } from "../../../navigation/books";

const SNav = styled.nav`
  display: flex;
  align-items: center;
`;

const SNavLink = styled(NavLink)`
  color: rgba(31, 32, 65, 0.5);
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-decoration: none;
  &.active {
    color: rgba(31, 32, 65, 0.75);
    font-weight: 700;
  }
  & + & {
    margin-left: 20px;
  }
`;

const SNavLinkWithDropdown = styled(SNavLink)`
  /* position: relative; */
  display: flex;
  align-items: center;
  &::after {
    content: "";
    width: 25px;
    height: 25px;
    background: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.5938 0.578125L12 1.98438L6 7.98438L0 1.98438L1.40625 0.578125L6 5.17188L10.5938 0.578125Z' fill='%231F2041' fill-opacity='0.5'/%3E%3C/svg%3E%0A")
      no-repeat center;
  }
`;

interface Props {
  links: IBook[];
}

const NavBar = ({ links }: Props) => {
  return (
    <SNav>
      {links.map((book) =>
        book.hasDropdown ? (
          <SNavLinkWithDropdown to={book.to}>{book.link}</SNavLinkWithDropdown>
        ) : (
          <SNavLink to={book.to}>{book.link}</SNavLink>
        )
      )}
    </SNav>
  );
};

export default NavBar;
