import React from 'react'
import PersonListsH from './PersonListsH';
import Pagination from './Pagination';
import NavBar from './NavBar';

export default function PersonListHooks() {
    return (
        <div>
            <NavBar />
            <PersonListsH />
            <Pagination />
        </div>
    )
}
