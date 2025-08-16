import { useEffect } from "react";
import { useAppDispatch } from "~/store/appStore";
import { API_OPTIONS, URLS } from "~/utils/apiConstants";
import { type Video } from "~/model/movie.model";
import { addTrailerVideo } from "~/store/slices/movies.slice";

const useGetTrailerVideo = (movieId: number) => {
  const dispatch = useAppDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(URLS.getMovieVideosUrl(movieId), API_OPTIONS);
    const json = await data.json();

    const filterData = json.results.filter(
      (video: Video) => video.type === "Trailer"
    );
    const trailer: Video = filterData.length ? filterData[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useGetTrailerVideo;
