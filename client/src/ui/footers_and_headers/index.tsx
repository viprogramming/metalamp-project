import Header from "../components/header";
import NavBar from "../components/navbar";

import Logo from "../../assets/Logo";

import { getHeadersLinks } from "../../utils";
import { SHeaderContainer } from "../../styles/components";

const headerLinks = getHeadersLinks();

const FootersAndHeaders = () => {
  return (
    <Header HeaderStyledComponent={SHeaderContainer}>
      <Logo /> <NavBar links={headerLinks} />
    </Header>
  );
};

export default FootersAndHeaders;
