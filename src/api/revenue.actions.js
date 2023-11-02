import { requestUserData, requestWalletData, requestAllTransactionsData } from "../services/requests/revenue.requests";

export const fetchUserDataAction = async ({queryKey}) => {
  try {
    const {data} = await requestUserData();
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

export const fetchWalletDataAction = async ({ queryKey }) => {
  try {
    const data = await requestWalletData ();
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

export const fetchAllTransactionsDataAction = async ({ queryKey }) => {
  try {
    const data = await requestAllTransactionsData();
    return data;
  } catch (error) {
    throw error.response.data;
  }
};