import { SearchResultContext } from '@/context/searchResult.context';
import useMultiSearch from '@/hooks/useMultiSearch';
import React, { useContext } from 'react';
import MovieCard from './MovieCard';
import TvShowCard from './TvShowCard';

const SearchList = () => {
  const { searchData, searchText } = useContext(SearchResultContext);

  useMultiSearch(searchText);

  console.log("SearchList rendering, searchData:", searchData);

  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-y-3">
      {searchData?.map((data) => {
       return (
        <div key={data.id}>
          {data.media_type === "movie" ? (
            <MovieCard movieResult={data} />
          ) : (
            <TvShowCard tvShowResult={data} />
          )}
        </div>
       ) 
    })}
    </div>
  );
};

export default SearchList;
