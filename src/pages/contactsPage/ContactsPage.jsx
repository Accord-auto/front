import { BlockMapContacts } from "./components/BlockMapContacts/BlockMapContacts";
import { InfoContacts } from "./components/InfoContacts/InfoContacts";
import "./contactspage.css";

export const ContactsPage = () => {
  return (
    <div className="contacts-main-page">
      <InfoContacts />
      <BlockMapContacts />
    </div>
  );
};
