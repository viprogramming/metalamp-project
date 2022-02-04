import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { IBook } from "../../../navigation/books";

import { showMoreCssUrl } from "../../../styles/constants";
import { linkFont } from "../../../styles/templates";

const SNav = styled.nav`
  display: flex;
  align-items: center;
`;

const SNavLink = styled(NavLink)`
  ${linkFont}

  & + & {
    margin-left: 20px;
  }
`;

const SNavLinkWithDropdown = styled(SNavLink)`
  display: flex;
  align-items: center;
  &::after {
    content: "";
    width: 25px;
    height: 25px;
    background: url("${showMoreCssUrl}") no-repeat center;
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
