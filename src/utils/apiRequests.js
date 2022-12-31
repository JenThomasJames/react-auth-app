import axios from "axios";

const ROOT_URL = "http://localhost:8080";

//Login call
export const authenticateUser = (email, password) => {
  const requestBody = {
    email,
    password,
  };
  return axios.post(ROOT_URL + "/auth", requestBody);
};

// Email check call
export const isEmailAvailable = (email) => {
  return axios.get(ROOT_URL + "/?email=" + email);
};

//Sign up call
export const saveUser = (user) => {
  return axios.post(ROOT_URL + "/", user);
};
