import { configureStore } from '@reduxjs/toolkit';
import superheroReducer from './superheroes/slice';

export const store = configureStore({
  reducer: {
    superhero: superheroReducer,
  },
  middleware: getDefaultMiddleware => 
     getDefaultMiddleware({
      serializableCheck: false,
    }),
});
