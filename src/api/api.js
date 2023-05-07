import axios from "axios";

const URL =  "http://localhost:4002";

export const addUserService = async (data) => {
  try {
    return await axios.post(`${URL}/createuser`, data);
  } catch (error) {
    console.log("Error while calling createuser API", error);
  }
};

export const getUserDataService = async (data) => {
  try {
    return await axios.get(`${URL}/usersdata`, data);
  } catch (error) {
    console.log("Error while calling usersdata API", error);
  }
};