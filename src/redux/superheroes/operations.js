import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { superheroApi } from './service'
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
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editSuperhero = createAsyncThunk(
  'superheroes/edit',
  async (obj, thunkAPI) => {
    try {
      const response = await superheroApi.editSuperhero(obj.heroForm, obj.id);
      return response.data;
    } catch (error) {
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
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNewImage = createAsyncThunk(
  'superheroes/addImage',
  async (obj, thunkAPI) => {
    try {
      const { response } = await superheroApi.addImage(obj.formData, obj.id);
      return response;
    } catch (error) {
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