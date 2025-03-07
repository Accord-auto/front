import { ThirdBlock } from "../../shared/components/thirdblock/ThirdBlock";
import { AboutInfo } from "./components/AboutInfo/AboutInfo";
import { CompanyInfo } from "./components/CompanyInfo/CompanyInfo";

export const AboutPage = () => {
  return (
    <>
      <AboutInfo />
      <ThirdBlock colorText="#00FFD1" />
      <CompanyInfo />
    </>
  );
};
