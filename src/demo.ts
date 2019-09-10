import axios from "axios";
export const runcallback = (callback: () => void): void => {
  callback();
};

export const getUserData = () => {
  return axios.get("/api/user");
};

export const specialMethod = () => {};

export const myFunction = () => {
  specialMethod();
};
