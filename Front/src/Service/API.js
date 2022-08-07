import Axios from "axios";
import { URL } from "../component/Constant/Constant";

const axiosUser = Axios.create({
  baseURL: URL,
  timeout: 80000,
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus: function (status) {
    return status == 200;
  },
});

export const customRequest = async (options, type) => {
  const data = new FormData();
  data.append("myvid", options.file);
  data.set("userName", "Sunny");
  const config = {
    headers: {
      "content-type":
        "multipart/form-data; boundary=----WebKitFormBoundaryqTqJIxvkWFYqvP5s",
    },
  };
  return await axiosUser.post(options.action, data, config);
};

export const getter = async () => {
    return await axiosUser.get(`/videolog`);
}