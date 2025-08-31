import MovieList from "./MovieList";
import { useAppSelector } from "~/store/appStore";

const MovieListContainer = () => {
  const movies = useAppSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-54 pl-4 md:pl-12 relative z-20">
        {movies?.nowPlayingMovies && (
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        )}
        {movies?.trendingMovies && (
          <MovieList title={"Trending"} movies={movies?.trendingMovies} />
        )}
        {movies?.topRatedMovies && (
          <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
        )}
        {movies?.upcomingMovies && (
          <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
        )}
        {movies?.popularMovies && (
          <MovieList title={"Popular"} movies={movies?.popularMovies} />
        )}
      </div>
    </div>
  );
};

export default MovieListContainer;
