import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { books } from "./books";

import loadable from "@loadable/component";

const Home = loadable(() => import("../pages/home"));
const NotFound = loadable(() => import("../pages/404"));
const FootersAndHeaders = loadable(() => import("../ui/footers_and_headers"));

const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path={books.home.to} element={<Home />} />
        <Route
          path={books.footersAndHeaders.to}
          element={<FootersAndHeaders />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
