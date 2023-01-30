import Image from 'next/image';
import React from 'react';

type SearchBarProps = {};

const SearchBar = (props: SearchBarProps) => {
  return (
    <div className="flex items-center justify-center h-11">
      <input
        placeholder="Search..."
        className="sm:w-80 md:w-82 w-48  h-full rounded-l-xl p-2 opacity-75 "
      />
      <div className="flex justify-center items-center bg-purple w-12 h-full rounded-r-xl">
        <Image
          src="./ic_round-search.svg"
          alt="search"
          width={25}
          height={25}
        />
      </div>
    </div>
  );
};

export default SearchBar;
