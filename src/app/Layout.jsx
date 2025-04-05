import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/mainPage/MainPage";
import { CatalogPage } from "../pages/catalogPage/CatalogPage";
import { ServicesPage } from "../pages/servicesPage/ServicesPage";
import { PartnersPage } from "../pages/partnersPage/PartnersPage";
import { ContactsPage } from "../pages/contactsPage/ContactsPage";
import { AboutPage } from "../pages/aboutPage/AboutPage";
import { Header } from "../shared/components/header/Header";
import { Footer } from "../shared/components/footer/Footer";
import { ProductPage } from "../pages/productPage/ProductPage";

export const Layout = () => {
  const location = useLocation();

  const noHeaderPaths = ["/"];

  return (
    <>
      {!noHeaderPaths.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/catalog" element={<CatalogPage />}></Route>
        <Route path="/services" element={<ServicesPage />}></Route>
        <Route path="/partners" element={<PartnersPage />}></Route>
        <Route path="/contacts" element={<ContactsPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/product/:id" element={<ProductPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
};
