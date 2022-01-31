import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
  type?: string;
}

const SButton = styled.button`
  padding: 15px 20px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #ffffff;
  background: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);
  border-radius: 22px;
  border: none;
`;

const SButtonLink = styled.a`
  padding: 15px 20px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #ffffff;
  background: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);
  border-radius: 22px;
  border: none;
`;

const Button = ({ children, type, ...rest }: Props) => {
  return type === "link" ? (
    <SButtonLink {...rest}>{children}</SButtonLink>
  ) : (
    <SButton {...rest}>{children}</SButton>
  );
};

export default Button;
