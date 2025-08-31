import React from "react";
import { useAppSelector } from "~/store/appStore";
import MovieList from "~/screens/Movie/MovieList";

const GptMovieSuggestions = () => {
  const { gptMovieNames, gptMovieResults } = useAppSelector(
    (store) => store.gpt
  );

  if (!gptMovieNames || !gptMovieResults) return null;

  return (
    <div className="p-4 m-4 bg-black/70">
      <div>
        {gptMovieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={gptMovieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
