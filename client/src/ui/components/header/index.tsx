import styled from "styled-components";

import { SContainer } from "../../../shared/container";

import { ReactNode } from "react";

const SHeader = styled.header`
  width: 100%;
  height: 70px;
  min-height: 70px;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
`;

const SHeaderContainer = styled(SContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
interface Props {
  children: ReactNode;
}

const Header = ({ children }: Props) => {
  return (
    <SHeader>
      <SHeaderContainer>{children}</SHeaderContainer>
    </SHeader>
  );
};

export default Header;
