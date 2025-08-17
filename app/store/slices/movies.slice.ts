import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { type Movie, type Video } from "~/model/movie.model";

interface MoviesState {
  nowPlayingMovies: Array<Movie> | null;
  trendingMovies: Array<Movie> | null;
  popularMovies: Array<Movie> | null;
  topRatedMovies: Array<Movie> | null;
  upcomingMovies: Array<Movie> | null;
  trailerVideo: Video | null;
}

// Define the initial state using that type
const initialState: MoviesState = {
  nowPlayingMovies: null,
  trendingMovies: null,
  popularMovies: null,
  topRatedMovies: null,
  upcomingMovies: null,
  trailerVideo: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {
    addNowPlayingMovies: (state, action: PayloadAction<Array<Movie>>) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrendingMovies: (state, action: PayloadAction<Array<Movie>>) => {
      state.trendingMovies = action.payload;
    },
    addPopularMovies: (state, action: PayloadAction<Array<Movie>>) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action: PayloadAction<Array<Movie>>) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action: PayloadAction<Array<Movie>>) => {
      state.upcomingMovies = action.payload;
    },
    addTrailerVideo: (state, action: PayloadAction<Video>) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrendingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addTrailerVideo,
} = moviesSlice.actions;
export default moviesSlice.reducer;
