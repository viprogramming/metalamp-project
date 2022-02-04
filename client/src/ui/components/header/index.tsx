import { ReactNode } from "react";

import styled, { StyledComponent } from "styled-components";

import { linkFont } from "../../../styles/templates";

const SHeader = styled.header`
  height: 70px;
  min-height: 70px;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
  background: #ffffff;
`;

const SUserName = styled.div`
  ${linkFont}
  margin-left: 40px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: -20px;
    height: 30px;
    width: 1px;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(31, 32, 65, 0.1);
  }
`;

interface Props {
  children?: ReactNode;
  HeaderStyledComponent: StyledComponent<"div", any, {}, never>;
  logo?: ReactNode;
  navbar?: ReactNode;
  buttons?: ReactNode;
  isLogin?: boolean;
  user?: { name: string };
}

const Header = ({
  children,
  HeaderStyledComponent,
  logo,
  navbar,
  buttons,
  isLogin,
  user,
}: Props) => {
  return (
    <SHeader data-testid='header'>
      <HeaderStyledComponent>
        {logo}
        {navbar}
        {children}
        {isLogin ? (
          <SUserName data-testid='userName'>Hello, {user?.name}!!!</SUserName>
        ) : (
          buttons
        )}
      </HeaderStyledComponent>
    </SHeader>
  );
};

export default Header;
