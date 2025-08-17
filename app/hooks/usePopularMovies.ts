import { useEffect } from "react";
import { useAppDispatch } from "~/store/appStore";
import { API_OPTIONS, URLS } from "~/utils/apiConstants";
import { addPopularMovies } from "~/store/slices/movies.slice";

const usePopularMovies = () => {
  const dispatch = useAppDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(URLS.getPopularUrl(), API_OPTIONS);

    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
