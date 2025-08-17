import { useEffect } from "react";
import { useAppDispatch } from "~/store/appStore";
import { API_OPTIONS, URLS } from "~/utils/apiConstants";
import { addTrendingMovies } from "~/store/slices/movies.slice";

const useTrendingMovies = () => {
  const dispatch = useAppDispatch();
  const getTrendingMovies = async () => {
    const data = await fetch(URLS.getTrendingUrl(), API_OPTIONS);

    const json = await data.json();

    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
