import Header from "../components/header";
import NavBar from "../components/navbar";

import Logo from "../../assets/Logo";

import { getHeadersLinks } from "../../utils";

const headerLinks = getHeadersLinks();

const FootersAndHeaders = () => {
  return (
    <Header>
      <Logo /> <NavBar links={headerLinks} />{" "}
    </Header>
  );
};

export default FootersAndHeaders;
