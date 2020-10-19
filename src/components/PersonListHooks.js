import React from 'react'
import PersonListsH from './PersonListsH';
import PaginationH from './PaginationH';
import NavBar from './NavBar';

export default function PersonListHooks() {
    return (
        <div>
            <NavBar />
            <PersonListsH />
            <PaginationH />
        </div>
    )
}
