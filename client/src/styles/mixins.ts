import { css } from "styled-components";

interface IFontParams {
  family: string;
  size: string;
  weight: string;
  style: string;
  lineHeight: string;
}

export const FontParams = ({
  family,
  size,
  weight,
  style,
}: Partial<IFontParams>) => css`
  font-family: ${family};
  font-size: ${size};
  font-weight: ${weight};
  font-style: ${style};
`;
