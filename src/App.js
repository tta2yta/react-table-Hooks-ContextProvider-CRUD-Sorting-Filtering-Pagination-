import React from 'react';
import PersonLists from './components/PersonLists';
import {AppContextProvider} from './components/Context'
import Pagination from './components/Pagination';
import  './App.css'
import { Router } from 'react-router-dom';

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

    <Switch>
    <Router exact path="/" component={} />
    <Router  path="/hooks" component={} />
    <Router path="/classes" component={} />
    </Switch>
        
    </>
  );
}

export default App;
