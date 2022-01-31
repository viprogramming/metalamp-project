import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { books } from "./books";

import loadable from "@loadable/component";

const Home = loadable(() => import("../pages/home"));
const NotFound = loadable(() => import("../pages/404"));

const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path={books.home} element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
