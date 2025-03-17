import axios from "axios";
import { backendUrl } from "../consts/api";

const apiURL = `${backendUrl}/companies`;

export const fetchHeaderBranches = async () => {
  const res = await axios.get(`${apiURL}/header`);
  return res.data;
};

export const fetchDepartmentsBranches = async () => {
  const res = await axios.get(`${apiURL}/departments`);
  return res.data;
};
