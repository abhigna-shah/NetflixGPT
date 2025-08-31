import GptSearchBar from "~/components/GptSearchBar";
import { BG_IMG } from "~/utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import Header from "~/components/Header";
const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen w-screen object-cover"
          src={BG_IMG}
          alt="logo"
        />
      </div>

      <div className="absolute w-screen">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
