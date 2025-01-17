import { BlockPartners } from "./components/blockPartners/BlockPartners";
import { StatementBlock } from "./components/statementBlock/StatementBlock";
import "./partnerspage.css";

export const PartnersPage = () => {
  return (
    <div className="partners-main-container">
      <p className="partners-title">Партнёрам</p>
      <p className="partners-descrip">
        Станьте нашим партнером и получите доступ к эксклюзивным предложениям и
        поддержке от ведущего бренда автозапчастей!
      </p>
      <BlockPartners />
      <p className="partners-title-2">Оставьте заявку</p>
      <p className="partners-descrip-2">
        В течение 2 рабочих дней с вами свяжется менеджер по работе с
        партнерами, ответит на все интересующие вас вопросы, отправит прайс-лист
        и иную информацию для нашего сотрудничества.
      </p>
      <StatementBlock />
    </div>
  );
};
