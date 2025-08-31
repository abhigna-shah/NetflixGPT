import Header from "~/components/Header";
import VideoContainer from "../Video/VideoContainer";
import GptSearch from "../GptSearch/GptSearch";
import MovieListContainer from "../Movie/MovieListContainer";
import { useAppSelector } from "~/store/appStore";
import { useEffect } from "react";
import useGetAllMovies from "~/hooks/useGetAllMovies";

export default function Browse() {
  const showGptSearch = useAppSelector((store) => store.gpt.showGptSearch);

  const {
    getNowPlayingMovies,
    getTrendingMovies,
    getTopRatedMovies,
    getPopularMovies,
    getUpcomingMovies,
  } = useGetAllMovies();

  useEffect(() => {
    getNowPlayingMovies();
    getTrendingMovies();
    getTopRatedMovies();
    getPopularMovies();
    getUpcomingMovies();
  }, []);

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <VideoContainer />
          <MovieListContainer />
        </>
      )}
    </div>
  );
}
