import { useEffect } from "react";
import { useAppDispatch } from "~/store/appStore";
import { API_OPTIONS, URLS } from "~/utils/apiConstants";
import { addNowPlayingMovies } from "~/store/slices/movies.slice";

const useNowPlayingMovies = () => {
  const dispatch = useAppDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(URLS.getNowPlayingUrl(), API_OPTIONS);

    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
