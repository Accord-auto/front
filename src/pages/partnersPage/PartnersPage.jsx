import { BlockPartners } from "./components/blockPartners/BlockPartners";
import { StatementBlock } from "./components/statementBlock/StatementBlock";
import { useDispatch, useSelector } from "react-redux";
import "./partnerspage.css";
import { selectRegionsData } from "../../features/regions/RegionsSelector";
import { useEffect } from "react";
import { fetchRegionsThunk } from "../../features/regions/RegionsSlice";
import { Loader } from "../../shared/components/loader/Loader";

export const PartnersPage = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(selectRegionsData);

  useEffect(() => {
    dispatch(fetchRegionsThunk());
  }, [dispatch]);

  if (status === "loading") {
    return <Loader />;
  }

  return (
    <div className="partners-main-container">
      <p className="partners-title">Партнёрам</p>
      <p className="partners-descrip">
        Станьте нашим партнером и получите эксклюзивные предложения и условия, а
        также поддержку от нашей компании.
      </p>
      <BlockPartners />
      <p className="partners-title-2">Оставьте заявку</p>
      <p className="partners-descrip-2">
        В ближайшее время с Вами свяжется наш менеджер, ответит на все
        интересующие вопросы и обсудит условия сотрудничества.
      </p>
      <StatementBlock />
    </div>
  );
};
