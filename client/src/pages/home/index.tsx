import Header from "../../ui/components/header";
import NavBar from "../../ui/components/navbar";
import Logo from "../../assets/Logo";

import { getHeadersLinks } from "../../utils";

import { SHeaderContainer } from "../../styles/components";
import Button from "../../ui/components/button";

import styled from "styled-components";

const headerLinks = getHeadersLinks();

const SButtons = styled.div`
  > a {
    margin-left: 20px;
  }
`;

const Home = () => (
  <Header
    HeaderStyledComponent={SHeaderContainer}
    logo={<Logo />}
    navbar={<NavBar links={headerLinks} />}
    buttons={
      <SButtons>
        <Button type='link'>войти</Button>
        <Button type='link'>зарегистрироваться</Button>
      </SButtons>
    }
  />
);

export default Home;
