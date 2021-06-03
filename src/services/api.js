import axios from "axios";

export const getDataShop = async () => {
  const url = "https://course-api.com/react-store-products";
  const response = await axios.get(url);
  const result = await response.status === 200 ? await response.data : [];
  return result;
};

export const getDataShopById = async (id) => {
  const url = `https://course-api.com/react-store-single-product?id=${id}`;
  const response = await axios.get(url);
  const result = await response.status === 200 ? await response.data : [];
  return result;
};
