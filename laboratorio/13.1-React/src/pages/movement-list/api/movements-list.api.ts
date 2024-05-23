import Axios from "axios";
import { Movements } from "./movements-list.api-model";

const url = `${import.meta.env.VITE_BASE_API_URL}/movements`;

export const getMovements = (accountId: string): Promise<Movements[]> => {
  return Axios.get<Movements[]>(url, { params: { accountId } }).then(
    ({ data }) => data
  );
};
