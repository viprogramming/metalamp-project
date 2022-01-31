import { Link } from "react-router-dom";

import styled from "styled-components";

import { SContainer } from "../../../shared/container";

import { IBook } from "../../../navigation/books";

import Logo from "../../../assets/Logo";

const SHeader = styled.header`
  width: 100%;
  height: 70px;
  min-height: 70px;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
`;

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

const SHeaderContainer = styled(SContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
interface Props {
  links: IBook[];
}

const Header = ({ links }: Props) => {
  return (
    <SHeader>
      <SHeaderContainer>
        <Logo />
        <SNav>
          {links.map((book) => (
            <SNavLink to={book.to}>{book.link}</SNavLink>
          ))}
        </SNav>
      </SHeaderContainer>
    </SHeader>
  );
};

export default Header;
