import React from 'react';

type SidebarProps = {};

const Sidebar = (props: SidebarProps) => {
  return (
    <div className="w-full bg-sidebar h-full rounded-br-3xl rounded-tr-3xl">
      <div className=" flex flex-col relative h-full w-full items-center justify-center">
        <div className="py-10">Mojoy</div>
        <div className="flex flex-col h-full w-full">
          <div
            className={`bg-white w-full rounded-br-3xl rounded-tr-3xl h-16 flex justify-center items-center`}
          >
            we
          </div>
        </div>
        <div className="absolute bottom-10">we</div>
      </div>
    </div>
  );
};

export default Sidebar;
