import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { type Movie, type Video } from "~/model/movie.model";

interface MoviesState {
  nowPlayingMovies: [Movie] | null;
  trailerVideo: Video | null;
}

// Define the initial state using that type
const initialState: MoviesState = {
  nowPlayingMovies: null,
  trailerVideo: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    addNowPlayingMovies: (state, action: PayloadAction<[Movie]>) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action: PayloadAction<Video>) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo } = moviesSlice.actions;
export default moviesSlice.reducer;
