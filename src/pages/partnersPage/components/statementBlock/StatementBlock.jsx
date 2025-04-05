import { useState } from "react";
import Modal from "../../../../shared/components/modal/Modal";
import { ActivityData } from "./ActivityData";
import { LocationData } from "./LocationData";
import { PersonalData } from "./PersonalData";
import "./statementblock.css";
import { personalData } from "../../../../shared/consts/personalData";
import {
  generateEmailTemplate,
  prepareMailtoLink,
} from "../../../../shared/utils/emailGenerate";
import { useSelector } from "react-redux";
import { selectPartnershipData } from "../../../../features/partnership/partnershipSelector";

export const StatementBlock = () => {
  const [open, setOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const { partnership } = useSelector(selectPartnershipData);

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkbox = e.target.querySelector(".statement-check");
    if (!checkbox.checked) {
      alert("Пожалуйста, согласитесь на обработку персональных данных");
      return;
    }

    setIsSending(true);

    try {
      const mailtoLink = prepareMailtoLink(partnership);
      window.location.href = mailtoLink;
    } catch (error) {
      alert("Произошла ошибка при подготовке письма");
    } finally {
      setIsSending(false);
    }
  };
  return (
    <form className="statement-container" onSubmit={handleSubmit}>
      <PersonalData />
      <LocationData />
      <ActivityData />
      <label className="statement-cont-check">
        <input type="checkbox" placeholder="" className="statement-check" />
        <p className="statement-check-text">
          Согласен на обработку{" "}
          <span
            className="statement-check-text-span"
            onClick={() => setOpen(true)}
          >
            персональных данных
          </span>
        </p>
        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          children={personalData}
        ></Modal>
      </label>
      <button className="statement-btn" type="submit">
        {isSending ? "Отправка..." : "Принять и отправить"}
      </button>
    </form>
  );
};
