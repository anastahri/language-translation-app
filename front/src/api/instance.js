import axios from "axios";
import { backUrl } from "../conf/backUrl";

export const instance = axios.create({
  baseURL: backUrl,
});
