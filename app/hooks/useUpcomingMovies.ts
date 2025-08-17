import { useEffect } from "react";
import { useAppDispatch } from "~/store/appStore";
import { API_OPTIONS, URLS } from "~/utils/apiConstants";
import { addUpcomingMovies } from "~/store/slices/movies.slice";

const useUpcomingMovies = () => {
  const dispatch = useAppDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(URLS.getUpcomingUrl(), API_OPTIONS);

    const json = await data.json();

    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
