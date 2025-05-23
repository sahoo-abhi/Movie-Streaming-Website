import { Routes , Route } from "react-router"
import MovieList from "@/components/MovieList";
import TvShowsList from "@/components/TvShowsList";
import SearchList from "@/components/SearchList";
import Trending from "@/components/Trending/Trending";
import Player from "@/components/Player";
import TvPlayer from "@/components/TvPlayer";

const AllRoutes = () => {
  return (
    <Routes>
       <Route path="/" element={<Trending />} />  
       <Route path="/movies" element={<MovieList/>} />
       <Route path="/tvshows" element={<TvShowsList/>} />
       <Route path="/search/:searchName/" element={<SearchList />} />

       <Route path= "/player/:playerId" element={<Player/>} />
       <Route path="/tvPlayer/:player1Id" element={<TvPlayer />} />
    </Routes>
  );
}

export default AllRoutes