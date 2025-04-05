import { useSelector } from "react-redux";
import "./blockmapcontacts.css";
import MapComponent from "../../../../widgets/reusedComponents/mapComponent/MapComponent";
import { Loader } from "../../../../shared/components/loader/Loader";
import { selectBranchesData } from "../../../../features/branches/branchesSelector";
import { ErrorComponent } from "../../../../shared/components/errorComp/ErrorComponent";

export const BlockMapContacts = () => {
  const { headersBranches, departmentsBranches, status } =
    useSelector(selectBranchesData);
  const arrayBranches = [...headersBranches, ...departmentsBranches];

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "failed") {
    return <ErrorComponent text={"карты"} />;
  }

  return (
    <>
      <MapComponent list={arrayBranches} />
    </>
  );
};
