import Axios from "axios";
import { Account } from "./account.api-model";

const url = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getAccount = (account: Account): Promise<Account> =>
  Axios.post<Account>(url, account).then(({ data }) => data);
