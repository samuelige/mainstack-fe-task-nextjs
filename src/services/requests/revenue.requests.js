import api from '../interceptor';

export const requestUserData = async () => {
  return await api.get(`/user`);
};
export const requestWalletData = async () => {
  return await api.get(`/wallet`);
};
export const requestAllTransactionsData = async (query_string) => {
  return await api.get(`/transactions`);
};
