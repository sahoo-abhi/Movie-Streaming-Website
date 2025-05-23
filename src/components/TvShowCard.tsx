import type { TvShowResult } from "@/hooks/useTvShowList";
import { Card, CardContent } from "./ui/card";
import { useNavigate } from "react-router";

interface Props {
  tvShowResult: TvShowResult;
}

const TvShowCard = ({ tvShowResult }: Props) => {
  const navigate = useNavigate();
  return (
    <Card className="border-0 h-full flex flex-col" onClick={() => {
       navigate(`/tvPlayer/${tvShowResult.id}`)
    }}>
      <CardContent className="flex flex-col flex-grow">
        <div className="flex flex-col h-full">
          <img
            src={
              tvShowResult.poster_path
                ? `https://image.tmdb.org/t/p/w500${tvShowResult.poster_path}`
                : "https://placehold.co/500x750?text=No+Image"
            }
            alt="poster"
            className="hover:opacity-80 transition-all"
          />
          <h1 className="mt-3 text-sm font-medium line-clamp-2">
            {tvShowResult.title ? tvShowResult.title : tvShowResult.name}
          </h1>
        </div>
      </CardContent>
    </Card>
  );
};

export default TvShowCard;
