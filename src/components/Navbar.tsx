//@ts-nocheck

import logo from "../assets/logo.png";
import Genres from "./Genres";
import { Input } from "./ui/input";
import { Link,useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { SearchResultContext } from "@/context/searchResult.context";


const Navbar = () => {
  const navigate = useNavigate();
  const {searchText,setSearchText} = useContext(SearchResultContext);

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setSearchText(e.target.value);
  navigate(`/search/${e.target.value}`);

  if (e.target.value.length === 0) {
      navigate(`/movies`);
  }
};

  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  navigate(`/search/${searchText}`);
};



  return (
    <div className="flex justify-between md:px-5 sm:px-5 px-5 items-center gap-3 text-xl my-3">
        <img src={logo} alt="logo" className="md:h-14 sm:h-9 h-9 hover:opacity-88 cursor-pointer" onClick={() => navigate("/")}/>
        <div className="flex gap-3 items-center">
            <form onSubmit={handleSubmit}>
                <Input placeholder="search" 
                className="border-grey-500 rounded-2xl md:w-fit sm:w-[30vw]" 
                value={searchText}
                onChange={handleChange}
                />
            </form>
            <div className="hidden md:flex gap-6 items-center">
               <div className="hidden md:flex gap-6 items-center">
                  <Genres/>
                  <Link to={'/movies'} className="transition px-2 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
                    <div>Movies</div>
                  </Link>
                   <Link to={'/tvshows'} className="transition px-2 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
                    <div>TvShows</div>
                  </Link>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar