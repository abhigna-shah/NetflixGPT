import Header from "~/components/Header";
import useNowPlayingMovies from "~/hooks/useNowPlayingMovies";
import VideoContainer from "../Video/VideoContainer";
import useTrendingMovies from "~/hooks/useTrendingMovies";
import useTopRatedMovies from "~/hooks/useTopRatedMovies";
import usePopularMovies from "~/hooks/usePopularMovies";
import useUpcomingMovies from "~/hooks/useUpcomingMovies";
import MovieListContainer from "../Movie/MovieListContainer";

export default function Browse() {
  useNowPlayingMovies();
  useTrendingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <VideoContainer />
      <MovieListContainer />
    </div>
  );
}
