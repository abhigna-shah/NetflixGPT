import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useAppSelector } from "~/store/appStore";

const VideoContainer = () => {
  const movies = useAppSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default VideoContainer;
