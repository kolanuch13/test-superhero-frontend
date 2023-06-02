import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { superheroApi } from './service'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const serverUrl = 'https://test-superhero-backend.onrender.com/api/superheroes';


axios.defaults.baseURL = serverUrl;

export const getSuperheroes = createAsyncThunk(
  'superheroes/get',
  async (data, thunkAPI) => {
    try {
      const response = await superheroApi.getSuperheroesList(data[0], data[1]);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getOneSuperhero = createAsyncThunk(
  'superheroes/getOne',
  async ( id , thunkAPI) => {
    try {
      const response = await superheroApi.getOneSuperhero(id);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addSuperhero = createAsyncThunk(
  'superheroes/add',
  async (hero, thunkAPI) => {
    try {
      const response = await superheroApi.addSuperhero(hero);
      Notify.success('New hero added!');
      return response.data;
    } catch (error) {
      Notify.failure('The problem is not in you :(');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editSuperhero = createAsyncThunk(
  'superheroes/edit',
  async (obj, thunkAPI) => {
    try {
      const response = await superheroApi.editSuperhero(obj.heroForm, obj.id);
      Notify.success('The hero edited!');
      return response.data;
    } catch (error) {
      Notify.failure('The problem is not in you :(');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeSuperhero = createAsyncThunk(
  'superheroes/remove',
  async (id, thunkAPI) => {
    try {
      const response = await superheroApi.removeSuperhero(id);
      return response.data;
    } catch (error) {
      Notify.failure('The problem is not in you :(');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNewImage = createAsyncThunk(
  'superheroes/addImage',
  async (obj, thunkAPI) => {
    try {
      const { response } = await superheroApi.addImage(obj.formData, obj.id);
      Notify.success('The heroe`s image added!');
      return response;
    } catch (error) {
      Notify.failure('The problem is not in you :(');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const superheroOperations = {
  getSuperheroes,
  getOneSuperhero,
  addSuperhero,
  editSuperhero,
  removeSuperhero,
  addNewImage,
};

export default superheroOperations;