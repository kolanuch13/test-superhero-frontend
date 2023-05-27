import { createSlice } from '@reduxjs/toolkit';
import superheroOperations from './operations';

const initialState = {
  superhero: {
    nickname: null,
    realName: null,
    originDescription: null,
    superpowers: null,
    catchPhrase: null,
    images: null,
  },
  superheroesList: null,
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
      .addCase(superheroOperations.getSuperheroes.fulfilled,
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
      .addCase(superheroOperations.getOneSuperhero.fulfilled,
        (state, action) => {
          state.nickname = action.payload.nickname;
          state.realName = action.payload.realName;
          state.originDescription = action.payload.originDescription;
          state.superpowers = action.payload.superpowers;
          state.catchPhrase = action.payload.catchPhrase;
          state.images = action.payload.images;
          state.isLoading = false;
        }
      )
      .addCase(superheroOperations.getOneSuperhero.rejected,
        (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        }
      )
      // Superhero/addSuperhero===============================================
      .addCase(superheroOperations.addSuperheroe.pending, state => {
        state.isLoading = true;
      })
      .addCase(superheroOperations.addSuperheroe.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(superheroOperations.addSuperheroe.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      // Superhero/editSuperheroe===============================================
      .addCase(superheroOperations.editSuperheroe.pending, state => {
        state.isLoading = true;
      })
      .addCase(superheroOperations.editSuperheroe.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(superheroOperations.editSuperheroe.rejected, (state, action) => {
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
      );
  },
});

export default superheroSlice.reducer;
