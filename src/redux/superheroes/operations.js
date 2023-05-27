import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {superheroApi} from './service'
const serverUrl = 'http://localhost:4000/api/superheroes';

axios.defaults.baseURL = serverUrl;

export const getSuperheroes = createAsyncThunk(
  'superheroes/get',
  async (data, thunkAPI) => {
    console.log(data);
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
  async ({ id }, thunkAPI) => {
    try {
      const response = await superheroApi.getOneSuperhero(id);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addSuperheroe = createAsyncThunk(
  'superheroes/add',
  async ({hero}, thunkAPI) => {
    try {
      const response = await superheroApi.addSuperhero(hero);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editSuperheroe = createAsyncThunk(
  'superheroes/edit',
  async ({ id, hero }, thunkAPI) => {
    try {
      const response = await superheroApi.editSuperhero(id, hero);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeSuperhero = createAsyncThunk(
  'superheroes/remove',
  async ({ id }, thunkAPI) => {
    try {
      const response = await superheroApi.removeSuperhero(id);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const superheroOperations = {
  getSuperheroes,
  getOneSuperhero,
  addSuperheroe,
  editSuperheroe,
  removeSuperhero,
};

export default superheroOperations;