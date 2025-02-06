import { Articles } from "./components/articles/Articles";
import { FirstBlock } from "./components/firstblock/FirstBlock";
import { MiniCatalog } from "./components/miniCatalog/MiniCatalog";
import { ScrollBlock } from "./components/scrollblock/ScrollBlock";
import { SecondBlock } from "./components/secondblock/SecondBlock";
import { SpecialOffers } from "./components/specialoffers/SpecialOffers";
import { ThirdBlock } from "../../shared/components/thirdblock/ThirdBlock";
import "./mainpage.css";
import { useState } from "react";
import { Loader } from "../../shared/components/loader/Loader";

/**
 * MAIN PAGE
 * @return JSX element
 */
export const MainPage = () => {
  // const [componentsLoaded, setComponentsLoaded] = useState({
  //   miniCatalog: false,
  //   specialoffers: false,
  //   articles: false,
  // });

  // const handleComponentLoaded = (name) => {
  //   setComponentsLoaded((prev) => ({
  //     ...prev,
  //     [name]: true,
  //   }));
  // };

  // const allLoaded = Object.values(componentsLoaded).every(Boolean);

  // if (!allLoaded) {
  //   return <Loader />;
  // }
  return (
    <>
      <FirstBlock />
      <ScrollBlock />
      <SecondBlock />
      <MiniCatalog />
      <SpecialOffers />
      <Articles />
      <ThirdBlock colorText="#f5f5f5" />
    </>
  );
};
