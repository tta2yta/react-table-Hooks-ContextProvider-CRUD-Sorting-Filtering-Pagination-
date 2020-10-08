import React from 'react';
import PersonLists from './components/PersonLists';
import {AppContextProvider} from './components/Context'

function App() {
  return (
    <>
    <AppContextProvider>
    <PersonLists />
    {/* <PersonListClass /> */}
    {/* <DemoUseEffect /> */}
    {/* <Test_1 /> */}

    </AppContextProvider>
    </>
  );
}

export default App;
