import client from "./client";
import jwtDecode from "jwt-decode";

import storage from "@/utils/storage";
// import { create } from "@/app/actions";

const tokenKey = "token";

const login = async (loginInfo) => {
  const res = await client.post("/auth/login", loginInfo);

  if (res.ok) {
    const { data } = res.data;

    storage.setItem(tokenKey, data.token);
    // create(data.token);
  }

  return res;
};

const getUser = () => {
  const token = getJwt();

  return token ? jwtDecode(token) : null;
};

const getJwt = () => storage.getItem(tokenKey);

export default { getUser, login, getJwt };
