import { MainMenuApp, Payment, Sidebar } from '@/components';
import React from 'react';

type AppProps = {};

const App = (props: AppProps) => {
  return (
    <div>
      <div className="flex bg-background">
        <div className="w-1/12 h-screen">
          <Sidebar />
        </div>
        <div className="sm:w-9/12 w-full h-full">
          <MainMenuApp />
        </div>
        <div className="sm:w-3/12 hidden bg-sidebar sm:block">
          <Payment />
        </div>
      </div>
    </div>
  );
};

export default App;
