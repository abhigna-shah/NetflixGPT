import { useEffect } from "react";
import { useAppDispatch } from "~/store/appStore";
import { API_OPTIONS, URLS } from "~/utils/apiConstants";
import { addTopRatedMovies } from "~/store/slices/movies.slice";

const useTopRatedMovies = () => {
  const dispatch = useAppDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(URLS.getTopRatedUrl(), API_OPTIONS);

    const json = await data.json();

    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
