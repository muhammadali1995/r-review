import axios from "axios";
import { ENV } from "../../utils/constants/env";

const apiURL = `${ENV.development.apiUrl}/restaurants`;

const create = (data) => {
  return axios.post(apiURL, data);
};

const getAll = (searchText) => {
  return axios.get(apiURL, {params: {searchText: searchText}});
};

const get = (id) => axios.get(apiURL, { params: { id } });

const remove = (id) => axios.delete(apiURL, { params: { id } });

const update = (data, id) => axios.put(apiURL, data, { params: { id } });

export const RestautantAPI = {
  create,
  get,
  getAll,
  remove,
  update,
};
