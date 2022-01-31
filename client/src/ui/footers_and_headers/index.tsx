import Header from "../components/header";

import { getHeadersLinks } from "../../utils";

const headerLinks = getHeadersLinks();

const FootersAndHeaders = () => {
  return <Header links={headerLinks} />;
};

export default FootersAndHeaders;
