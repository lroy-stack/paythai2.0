import api from "./api";

export const connectWallet = async (address) => {
  const response = await api.post("/wallet/connect", { address });
  return response.data;
};
