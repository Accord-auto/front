import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const apiURL = `${backendUrl}/companies`;

export const fetchHeaderBranches = async () => {
  const res = await axios.get(`${apiURL}/header`);
  if (!res.data) {
    throw new Error("Пустой ответ от сервера");
  }
  return res.data;
};

export const fetchDepartmentsBranches = async () => {
  const res = await axios.get(`${apiURL}/departments`);
  if (!res.data) {
    throw new Error("Пустой ответ от сервера");
  }
  return res.data;
};
