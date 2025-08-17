export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTc3MjZlMmIyYjY4YzQxMDkwODA1YzY1MzQ2MDc5NSIsIm5iZiI6MTc1NTM1MDQ0Mi44MzEsInN1YiI6IjY4YTA4NWFhM2VlOWNlNWU4MzYzMjAwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r8nNEEgSOWNdhDRfe5WGzBjHDjv9W3UaXXKy7H6XTM4",
  },
};

export const URLS = {
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
