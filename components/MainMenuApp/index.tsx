import React from 'react';
import ItemMenu from '../ItemMenu';
import ListCategory from '../ListCategory';
import SearchBar from '../SearchBar';

type MainMenuAppProps = {};

const MainMenuApp = (props: MainMenuAppProps) => {
  return (
    <div className=" sm:px-6 md:px-12 px-4 py-12 w-full">
      <div className="flex flex-row w-full  justify-between">
        <div className="hidden sm:block">
          <p className="text-purple font-semibold text-2xl">Welcome Admin</p>
          <p className="text-white font-semibold text-xl">
            Ada pesanan apa hari ini ?
          </p>
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
      <div className="py-7">
        <ListCategory />
      </div>
      <div>
        <div className="flex flex-wrap w-full justify-between">
          <div className="sm:w-44 w-36 m-2 h-72 sm:h-96">
            <ItemMenu />
          </div>
          <div className="sm:w-44 w-36 m-2 h-72 sm:h-96">
            <ItemMenu />
          </div>
          <div className="sm:w-44 w-36 m-2 h-72 sm:h-96">
            <ItemMenu />
          </div>
          <div className="sm:w-44 w-36 m-2 h-72 sm:h-96">
            <ItemMenu />
          </div>
          <div className="sm:w-44 w-36 m-2 h-72 sm:h-96">
            <ItemMenu />
          </div>
          <div className="sm:w-44 w-36 m-2 h-72 sm:h-96">
            <ItemMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenuApp;
