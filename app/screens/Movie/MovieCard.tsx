import { URLS } from "~/utils/apiConstants";

interface MovieCardProps {
  posterPath: string;
}
const MovieCard = ({ posterPath }: MovieCardProps) => {
  if (!posterPath) return null;
  return (
    <div className="w-48 pr-4">
      <img src={URLS.getImageUrl(posterPath)} alt="Movie Card" />
    </div>
  );
};

export default MovieCard;
