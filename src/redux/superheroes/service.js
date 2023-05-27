import axios from 'axios';

const getSuperheroesList = async (page, size) => {
  return await axios.get(`/?page=${page}&size=${size}`);
};

const getOneSuperhero = async id => {
  return axios.get(`/${id}`);
};

const addSuperhero = async hero => {
  return axios.post(``, hero);
};

const editSuperhero = async (id, hero) => {
  return axios.put(`/${id}`, hero);
};

const removeSuperhero = async id => {
  return axios.delete(`/${id}`);
};

export const superheroApi = {
  getSuperheroesList,
  getOneSuperhero,
  addSuperhero,
  editSuperhero,
  removeSuperhero,
};
