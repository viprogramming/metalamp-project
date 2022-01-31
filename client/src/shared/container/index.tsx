import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

export const SContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1440px;
`;

const Container = ({ children }: Props) => {
  return <SContainer>{children}</SContainer>;
};

export default Container;
