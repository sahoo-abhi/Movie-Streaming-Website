import type { MovieResult } from "@/hooks/useMovies";
import { Card, CardContent } from "./ui/card";
import { useNavigate } from "react-router";
interface Props {
  movieResult: MovieResult;
}

const MovieCard = ({ movieResult }: Props) => {
  const navigate = useNavigate();
  return (
    <Card className="border-0 h-full flex flex-col" onClick={() => {
      navigate(`/player/${movieResult.id}`)
    }}>
      <CardContent className="flex flex-col flex-grow">
        <div className="flex flex-col h-full">
          <img
            src={
              movieResult.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieResult.poster_path}`
                : "https://placehold.co/500x750?text=No+Image"
            }
            alt="poster"
            className="hover:opacity-80 transition-all"
          />
          <h1 className="mt-3 text-sm font-medium line-clamp-2">
            {movieResult.title}
          </h1>
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;



