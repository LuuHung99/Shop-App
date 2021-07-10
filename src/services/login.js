import axios from "axios";

export const PostLogin = async (account) => {
    const url = "http://localhost:5000/api/login";
    const response = await axios.post(url, account);
    return response;
  };