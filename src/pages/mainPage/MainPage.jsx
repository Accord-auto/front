import { FirstBlock } from "./components/firstblock/FirstBlock";
import { MiniCatalog } from "./components/miniCatalog/MiniCatalog";
import { ScrollBlock } from "./components/scrollblock/ScrollBlock";
import { SecondBlock } from "./components/secondblock/SecondBlock";
import "./mainpage.css";
import { SpecialOffers } from "./components/specialoffers/SpecialOffers";
import { Articles } from "./components/articles/Articles";

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
      <MiniCatalog />
      <SpecialOffers />
      <ScrollBlock />
      <Articles />
    </>
  );
};
