import { useDispatch } from "react-redux";
import { BlockMapContacts } from "./components/BlockMapContacts/BlockMapContacts";
import { InfoContacts } from "./components/InfoContacts/InfoContacts";
import "./contactspage.css";
import {
  fetchDepartmentsBranchesThunk,
  fetchHeaderBranchesThunk,
} from "../../features/branches/branchesSlice";
import { useEffect } from "react";

export const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHeaderBranchesThunk());
    // dispatch(fetchDepartmentsBranchesThunk());
  }, [dispatch]);
  return (
    <div className="contacts-main-page">
      <InfoContacts />
      <BlockMapContacts />
    </div>
  );
};
