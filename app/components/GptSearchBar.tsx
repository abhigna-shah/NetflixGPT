import { useRef, useState } from "react";
import openai from "~/utils/openAi";
import { API_OPTIONS, URLS } from "~/utils/apiConstants";
import { useAppDispatch } from "~/store/appStore";
import { addGptMovieResult } from "~/store/slices/gpt.slice";
import Loader from "./Loader";

const GptSearchBar = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const searchTextInput = useRef<HTMLInputElement>(null);

  // search movie in TMDB
  const searchMovieTMDB = async (movieName: string) => {
    const movieData = await fetch(URLS.getMovieInfoUrl(movieName), API_OPTIONS);
    const movieJson = await movieData.json();

    return movieJson.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchTextInput.current?.value);

    // Make an API call to get results
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchTextInput.current?.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar,Sholay,Don,Golmaal,Koi Mil Gaya";

    setIsLoading(true);
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      // TODO:  Write Error Handling
    }

    if (gptResults.choices?.[0]?.message?.content) {
      console.log("Gpt Results ==", gptResults.choices?.[0]?.message?.content);
      // Array of Movies
      const gptMovies: Array<string> =
        gptResults.choices?.[0]?.message?.content.split(",");
      console.log("GPT Movies ==", gptMovies);

      const moviesPromiseArray = gptMovies.map((movieName) =>
        searchMovieTMDB(movieName.trimStart())
      );

      const tmdbResults = await Promise.all(moviesPromiseArray);
      console.log("TMDB Results ==", tmdbResults);

      dispatch(
        addGptMovieResult({
          gptMovieNames: gptMovies,
          gptMovieResults: tmdbResults,
        })
      );

      setIsLoading(false);
    }
  };

  return (
    <div className="pt-[10%] mx-[25%] w-1/2 flex justify-center items-center">
      <form
        className="bg-black w-[100%] grid grid-cols-12 justify-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchTextInput}
          type="search"
          className="p-4 m-4 col-span-9 bg-white"
          placeholder="What would you like to watch today?"
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
          disabled={isLoading}
        >
          {isLoading && <Loader />}
          {!isLoading && <>Search</>}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
