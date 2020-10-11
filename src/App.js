import React from 'react';
import PersonLists from './components/PersonLists';
import {AppContextProvider} from './components/Context'
import Pagination from './components/Pagination';

function App() {
  return (
    <>
    <AppContextProvider>
    <PersonLists />
    <Pagination />
    {/* <PersonListClass /> */}
    {/* <DemoUseEffect /> */}
    {/* <Test_1 /> */}

    </AppContextProvider>
    </>
  );
}

export default App;
