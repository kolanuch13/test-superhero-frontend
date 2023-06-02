import { createSlice } from '@reduxjs/toolkit';
import superheroOperations from './operations';

const initialState = {
  hero: null,
  superheroesList: [],
  isLoading: false,
  error: null,
};

const superheroSlice = createSlice({
  name: 'superhero',
  initialState,
  extraReducers: builder => {
    builder
      // Superhero/getSuperheroes=====================================
      .addCase(superheroOperations.getSuperheroes.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(
        superheroOperations.getSuperheroes.fulfilled,
        (state, action) => {
          state.superheroesList = action.payload.result;
          state.isLoading = false;
        }
      )
      .addCase(superheroOperations.getSuperheroes.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      // Superhero/getOneSuperhero=========================================
      .addCase(superheroOperations.getOneSuperhero.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        superheroOperations.getOneSuperhero.fulfilled,
        (state, action) => {
          state.hero = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(
        superheroOperations.getOneSuperhero.rejected,
        (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        }
      )
      // Superhero/addSuperhero===============================================
      .addCase(superheroOperations.addSuperhero.pending, state => {
        state.isLoading = true;
      })
      .addCase(superheroOperations.addSuperhero.fulfilled, (state, action) => {
        state.superheroesList.push(action.payload);
        state.isLoading = false;
      })
      .addCase(superheroOperations.addSuperhero.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      // Superhero/editSuperheroe===============================================
      .addCase(superheroOperations.editSuperhero.pending, state => {
        state.isLoading = true;
      })
      .addCase(superheroOperations.editSuperhero.fulfilled, (state, action) => {
        state.hero = action.payload;
        state.isLoading = false;
      })
      .addCase(superheroOperations.editSuperhero.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      // Superhero/removeSuperhero===============================================
      .addCase(superheroOperations.removeSuperhero.pending, state => {
        state.isLoading = true;
      })
      .addCase(superheroOperations.removeSuperhero.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(
        superheroOperations.removeSuperhero.rejected,
        (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        }
      )
      // Superhero/addImage======================================================
      .addCase(superheroOperations.addNewImage.pending, state => {
        state.isLoading = true;
      })
      .addCase(superheroOperations.addNewImage.fulfilled, (state, action) => {
        state.hero.images.push(action.payload);
        state.isLoading = false;
      })
      .addCase(superheroOperations.addNewImage.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export default superheroSlice.reducer;
