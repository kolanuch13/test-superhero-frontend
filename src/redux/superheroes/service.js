import axios from 'axios';
const accessKey = localStorage.getItem('innerKey');

const getSuperheroesList = async (page, size) => {
  return await axios.get(`/?page=${page}&size=${size}`);
};

const getOneSuperhero = async id => {
  return await axios.get(`/${id}`);
};

const addSuperhero = async hero => {
  return await axios.post(``, hero);
};

const editSuperhero = async (hero, id) => {
  const body = { accessKey, hero };
  return await axios.put(`/${id}`, body);
};

const removeSuperhero = async id => {
  const body = { accessKey };
  return await axios.delete(`/${id}`, {data: body});
};

const addImage = async (file, id) => {
  return await axios.patch(`/image/${id}`, file);
};

export const superheroApi = {
  getSuperheroesList,
  getOneSuperhero,
  addSuperhero,
  editSuperhero,
  removeSuperhero,
  addImage,
};
