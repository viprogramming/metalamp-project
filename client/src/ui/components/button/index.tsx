import { ReactNode, SyntheticEvent } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
  type?: string;
  onClick?: (e: SyntheticEvent) => void;
  id?: string;
}

const SButton = styled.button`
  padding: 10px 20px;
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

const SButtonLink = SButton.withComponent("a");

const Button = ({ children, type, onClick, ...rest }: Props) => {
  return type === "link" ? (
    <SButtonLink {...rest} onClick={onClick}>
      {children}
    </SButtonLink>
  ) : (
    <SButton {...rest} onClick={onClick}>
      {children}
    </SButton>
  );
};

export default Button;
