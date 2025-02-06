import "./buypage.css";
import exit from "../../assets/images/exit.svg";
import { useNavigate, useParams } from "react-router-dom";
import { RulesBuy } from "./components/rulesBuy/RulesBuy";

export const BuyPage = () => {
  const navigate = useNavigate();
  const { article } = useParams();
  return (
    <>
      <img
        src={exit}
        alt=""
        className="product-exit"
        onClick={() => navigate(-1)}
      />
      <div className="buypage-container">
        <RulesBuy article={article} />
      </div>
    </>
  );
};
