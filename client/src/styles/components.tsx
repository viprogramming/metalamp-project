import styled from "styled-components";

import { SContainer } from "../shared/container";

export const SHeaderContainer = styled(SContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > svg {
    flex: 1 1 auto;
  }
`;
