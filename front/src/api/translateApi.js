import axios from "axios";

const translateApi = (source, target, text) => {
  const data = { source, target, text };
  return axios.post("http://localhost:8000/api/translate", data);
};

export default translateApi;
