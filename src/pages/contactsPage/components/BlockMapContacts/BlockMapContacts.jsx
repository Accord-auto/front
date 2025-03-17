import { useDispatch, useSelector } from "react-redux";
import "./blockmapcontacts.css";
import MapComponent from "../../../../widgets/reusedComponents/mapComponent/MapComponent";
import { useEffect } from "react";
import { Loader } from "../../../../shared/components/loader/Loader";
import { selectBranchesData } from "../../../../features/branches/branchesSelector";
import {
  fetchDepartmentsBranchesThunk,
  fetchHeaderBranchesThunk,
} from "../../../../features/branches/branchesSlice";
import { ErrorComponent } from "../../../../shared/components/errorComp/ErrorComponent";

export const BlockMapContacts = () => {
  const dispatch = useDispatch();
  const { headersBranches, departmentsBranches, status } =
    useSelector(selectBranchesData);
  const arrayBranches = [...headersBranches, ...departmentsBranches];

  useEffect(() => {
    dispatch(fetchHeaderBranchesThunk());
    dispatch(fetchDepartmentsBranchesThunk());
  }, [dispatch]);

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
