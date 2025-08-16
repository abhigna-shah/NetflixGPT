import { useAppSelector } from "~/store/appStore";
import useGetTrailerVideo from "~/hooks/useGetTrailerVideo";

interface VideoBackgroundProps {
  movieId: number;
}
const VideoBackground = ({ movieId }: VideoBackgroundProps) => {
  useGetTrailerVideo(movieId);
  const trailerVideo = useAppSelector((store) => store.movies?.trailerVideo);
  if (!trailerVideo) return null;
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
