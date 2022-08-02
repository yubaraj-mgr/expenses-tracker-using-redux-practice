import axios from "axios";

// Axios helper for user
// ###
// ###
// ###
// ###
const endPoint = "http://localhost:8000";
export const createUser = async (userDetails) => {
  try {
    const response = await axios.post(
      endPoint + "/api/v1/registration",
      userDetails
    );
    return response.data;
  } catch (error) {
    error && console.log(error);
  }
};

export const checkUserDetails = async (email) => {
  try {
    const response = await axios.post(endPoint + "/api/v1/login", email);
    return response.data;
  } catch (error) {
    error && console.log(error);
  }
};

// Axios helper for Transactions
// ###
// ###
// ###
// ###

export const postTransactions = async (data) => {
  try {
    const response = await axios.post(endPoint + "/api/v1/transactions", data);
    return response.data;
  } catch (error) {
    error && console.log(error);
  }
};
