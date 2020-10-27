import React from 'react'
import PersonListsH from './PersonListsH';
import PaginationH from './PaginationH';
import NavBar from './NavBar';
import { AppContextProvider } from './ContextH';

export default function PersonListHooks() {
    return (
        <div>
            <NavBar />
            <AppContextProvider>
            <PersonListsH />
            <PaginationH />
            </AppContextProvider>
            
        </div>
    )
}
