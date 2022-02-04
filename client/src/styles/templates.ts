import { css } from "styled-components";

export const linkFont = css`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: rgba(31, 32, 65, 0.5);
  text-decoration: none;

  &.active {
    color: rgba(31, 32, 65, 0.75);
    font-weight: 700;
  }
`;
