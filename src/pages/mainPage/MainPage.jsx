import { FirstBlock } from "./components/firstblock/FirstBlock";
import { MiniCatalog } from "./components/miniCatalog/MiniCatalog";
import { ScrollBlock } from "./components/scrollblock/ScrollBlock";
import { SecondBlock } from "./components/secondblock/SecondBlock";
import { ThirdBlock } from "../../shared/components/thirdblock/ThirdBlock";
import "./mainpage.css";
import { Loader } from "../../shared/components/loader/Loader";
import { SpecialOffers } from "./components/specialoffers/SpecialOffers";
import { Articles } from "./components/articles/Articles";

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
      <ScrollBlock />
      <Articles />
      <ThirdBlock colorText="#f5f5f5" />
    </>
  );
};
