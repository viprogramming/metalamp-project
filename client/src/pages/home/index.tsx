import styled from "styled-components";

import Header from "../../ui/components/header";

import { getHeadersLinks } from "../../utils";

const SHeading = styled.h1`
  color: green;
`;

const headerLinks = getHeadersLinks();

const Home = () => {
  return (
    <>
      <Header links={headerLinks} />
      <SHeading>Home page</SHeading>
    </>
  );
};

export default Home;
