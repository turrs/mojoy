import React from 'react';

type ListCategoryProps = {};

const ListCategory = (props: ListCategoryProps) => {
  return (
    <div className="flex">
      <div className="pr-5">
        <div className="h-12 bg-white flex items-center justify-center rounded-xl">
          <div className="p-3.5">Coffee</div>
        </div>
      </div>
      <div className="pr-5">
        <div className="h-12 bg-white flex items-center justify-center rounded-xl">
          <div className="p-3.5">Coffee</div>
        </div>
      </div>
    </div>
  );
};

export default ListCategory;
