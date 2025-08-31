import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { type Movie } from "~/model/movie.model";

interface GptState {
  showGptSearch: boolean;
  gptMovieNames: Array<string> | null;
  gptMovieResults: Array<Array<Movie>> | null;
}

interface GptMovieResult {
  gptMovieNames: Array<string> | null;
  gptMovieResults: Array<Array<Movie>> | null;
}

// Define the initial state using that type
const initialState: GptState = {
  showGptSearch: false,
  gptMovieNames: null,
  gptMovieResults: null,
};

const gptSlice = createSlice({
  name: "gpt",
  initialState: initialState,
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action: PayloadAction<GptMovieResult>) => {
      state.gptMovieNames = action.payload.gptMovieNames;
      state.gptMovieResults = action.payload.gptMovieResults;
    },
    clearGptMovieResults: (state) => {
      state.gptMovieNames = null;
      state.gptMovieResults = null;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResult, clearGptMovieResults } =
  gptSlice.actions;
export default gptSlice.reducer;
