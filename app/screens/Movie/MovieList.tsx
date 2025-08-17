import { type Movie } from "~/model/movie.model";
import MovieCard from "./MovieCard";

interface MovieListProps {
  title: string;
  movies: Array<Movie>;
}

const MovieList = ({ title, movies }: MovieListProps) => {
  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
