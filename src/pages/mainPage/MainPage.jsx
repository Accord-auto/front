import { Articles } from "./components/articles/Articles";
import { FirstBlock } from "./components/firstblock/FirstBlock";
import { MiniCatalog } from "./components/miniCatalog/MiniCatalog";
import { ScrollBlock } from "./components/scrollblock/ScrollBlock";
import { SecondBlock } from "./components/secondblock/SecondBlock";
import { SpecialOffers } from "./components/specialoffers/SpecialOffers";
import { ThirdBlock } from "../../shared/components/thirdblock/ThirdBlock";
import "./mainpage.css";

/**
 * MAIN PAGE
 * @return JSX element
 */
export const MainPage = () => {
  return (
    <>
      <FirstBlock />
      <ScrollBlock />
      <SecondBlock />
      <SpecialOffers />
      <MiniCatalog />
      <Articles />
      <ThirdBlock colorText="#f5f5f5" />
    </>
  );
};
