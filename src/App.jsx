import { BrowserRouter, Routes, Route, useLocation } from "react-router";

import Loader from "./components/Loader";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Wilds from "./pages/Wilds";
import Ascendance from "./pages/Ascendance";
import NotFound from "./pages/NotFound";

function SiteLayout() {
  const location = useLocation();

  let pageClass;

  switch (location.pathname.replace(/\/+$/, "") || "/") {
    case "/":
      pageClass = "page-home";
      break;
    case "/wilds":
      pageClass = "page-wilds";
      break;
    case "/ascendance":
      pageClass = "page-ascendance";
      break;
    default:
      pageClass = "page-not-found";
  }

  return (
    <>
      {location.pathname === "/" && <Loader />}

      <div className={`site-layout ${pageClass}`}>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wilds" element={<Wilds />} />
          <Route path="/ascendance" element={<Ascendance />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <SiteLayout />
    </BrowserRouter>
  );
}

export default App;
