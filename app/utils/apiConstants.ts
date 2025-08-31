export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_KEY,
  },
};

export const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY;
export const URLS = {
  getMovieInfoUrl: (movieName: string): string =>
    `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
  getMovieVideosUrl: (id: number): string =>
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,

  getImageUrl: (imageKey: string, width: string = "w500"): string =>
    `https://image.tmdb.org/t/p/${width}/${imageKey}`,

  getNowPlayingUrl: (): string =>
    `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`,

  getTrendingUrl: (): string =>
    `https://api.themoviedb.org/3/trending/movie/day?language=en-US`,

  getTopRatedUrl: (): string =>
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,

  getPopularUrl: (): string =>
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,

  getUpcomingUrl: (): string =>
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
};
