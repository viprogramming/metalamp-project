import styled, { StyledComponent } from "styled-components";

import { ReactNode } from "react";

const SHeader = styled.header`
  width: 100%;
  height: 70px;
  min-height: 70px;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
  background: #ffffff;
`;

const SUserName = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: rgba(31, 32, 65, 0.5);
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
    <SHeader>
      <HeaderStyledComponent>
        {logo}
        {navbar}
        {children}
        {isLogin ? <SUserName>Hello, {user?.name}!!!</SUserName> : buttons}
      </HeaderStyledComponent>
    </SHeader>
  );
};

export default Header;
