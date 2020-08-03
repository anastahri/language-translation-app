import { instance } from "./instance";

const translateApi = (source, target, text) => {
  const data = { source, target, text };
  return instance.post("/api/translate", data);
};

export default translateApi;
