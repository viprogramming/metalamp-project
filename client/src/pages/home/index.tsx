import styled from "styled-components";

import Header from "../../ui/components/header";
import NavBar from "../../ui/components/navbar";

import Logo from "../../assets/Logo";

import { getHeadersLinks } from "../../utils";

const SHeading = styled.h1`
  color: green;
`;

const headerLinks = getHeadersLinks();

const Home = () => {
  return (
    <>
      <Header>
        <Logo />
        <NavBar links={headerLinks} />
      </Header>
      <SHeading>Home page</SHeading>
    </>
  );
};

export default Home;
