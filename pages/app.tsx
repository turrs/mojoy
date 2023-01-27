import { MainMenuApp, Payment, Sidebar } from '@/components';
import React from 'react';

type AppProps = {};

const App = (props: AppProps) => {
  return (
    <div>
      <div className="flex">
        <div className="w-1/12 h-screen">
          <Sidebar />
        </div>
        <div className="w-8/12">
          <MainMenuApp />
        </div>
        <div className="w-4/12">
          <Payment />
        </div>
      </div>
    </div>
  );
};

export default App;
