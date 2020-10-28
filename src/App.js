import React from 'react';
// import PersonLists from './components/PersonLists';
// import {AppContextProvider} from './components/ContextH'
// import Pagination from './components/Pagination';
import  './App.css'
import { Router } from 'react-router-dom';
import PersonListHooks from './components/PersonListHooks';
import PersonListClasses from './components/PersonListClasses';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
    {/* <AppContextProvider>
    <PersonLists />
    <Pagination />
    </AppContextProvider> */}
{/* <AppContextProvider> */}
<Switch>
    <Route exact path="/" component={Home} />
    <Route  path="/hooks" component={PersonListHooks} />
    <Route path="/classes" component={PersonListClasses} />
    </Switch>
{/* </AppContextProvider> */}
   
     
    </>
  );
}

export default App;
