import Header from "~/components/Header";
import useNowPlayingMovies from "~/hooks/useNowPlayingMovies";
import VideoContainer from "../Video/VideoContainer";

export default function Browse() {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <VideoContainer />
    </div>
  );
}
