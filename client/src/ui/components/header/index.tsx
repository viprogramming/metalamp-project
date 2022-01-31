import styled, { StyledComponent } from "styled-components";

import { ReactNode } from "react";

const SHeader = styled.header`
  width: 100%;
  height: 70px;
  min-height: 70px;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
`;

interface Props {
  children?: ReactNode;
  HeaderStyledComponent: StyledComponent<"div", any, {}, never>;
  logo?: ReactNode;
  navbar?: ReactNode;
  buttons?: ReactNode;
}

const Header = ({
  children,
  HeaderStyledComponent,
  logo,
  navbar,
  buttons,
}: Props) => {
  return (
    <SHeader>
      <HeaderStyledComponent>
        {logo}
        {navbar}
        {children}
        {buttons}
      </HeaderStyledComponent>
    </SHeader>
  );
};

export default Header;
