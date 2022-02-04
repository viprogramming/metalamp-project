import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import styled from "styled-components";

import { SContainer } from "../../../shared/container";

const SIcon = styled(FontAwesomeIcon)`
  width: 25px !important;
  height: 25px !important;
  color: purple;
`;

const SFooter = styled.footer`
  background: #ffffff;
`;

const SFooterMain = styled.div`
  height: 372px;
  background: #ffffff;
  box-shadow: 0px 1px 0px rgba(31, 32, 65, 0.1);
  border-bottom: solid 2px rgba(31, 32, 65, 0.1);
`;

const SFooterMinor = styled(SFooterMain)`
  height: 70px;
  border-bottom: none;
`;

const SFooterMinorContainer = styled(SContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SIconsList = styled.ul`
  list-style: none;
  display: flex;

  & > li + li {
    margin-left: 20px;
  }
`;

const Footer = () => {
  return (
    <SFooter>
      <SFooterMain>
        <SContainer>main</SContainer>
      </SFooterMain>
      <SFooterMinor>
        <SFooterMinorContainer>
          <div>Copyright © 2018 Toxin отель. Все права защищены.</div>
          <SIconsList>
            <li>
              <SIcon icon={faFacebookSquare} />
            </li>
            <li>
              <SIcon icon={faTwitter} />
            </li>
            <li>
              <SIcon icon={faInstagramSquare} />
            </li>
          </SIconsList>
        </SFooterMinorContainer>
      </SFooterMinor>
    </SFooter>
  );
};

export default Footer;
