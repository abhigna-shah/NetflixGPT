import { useAppDispatch } from "~/store/appStore";
import { API_OPTIONS, URLS } from "~/utils/apiConstants";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addTrendingMovies,
  addUpcomingMovies,
} from "~/store/slices/movies.slice";

const useGetAllMovies = () => {
  const dispatch = useAppDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(URLS.getNowPlayingUrl(), API_OPTIONS);

    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
  };

  const getPopularMovies = async () => {
    const data = await fetch(URLS.getPopularUrl(), API_OPTIONS);

    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };

  const getTopRatedMovies = async () => {
    const data = await fetch(URLS.getTopRatedUrl(), API_OPTIONS);

    const json = await data.json();

    dispatch(addTopRatedMovies(json.results));
  };

  const getTrendingMovies = async () => {
    const data = await fetch(URLS.getTrendingUrl(), API_OPTIONS);

    const json = await data.json();

    dispatch(addTrendingMovies(json.results));
  };

  const getUpcomingMovies = async () => {
    const data = await fetch(URLS.getUpcomingUrl(), API_OPTIONS);

    const json = await data.json();

    dispatch(addUpcomingMovies(json.results));
  };

  return {
    getNowPlayingMovies,
    getPopularMovies,
    getTopRatedMovies,
    getTrendingMovies,
    getUpcomingMovies,
  };
};

export default useGetAllMovies;
