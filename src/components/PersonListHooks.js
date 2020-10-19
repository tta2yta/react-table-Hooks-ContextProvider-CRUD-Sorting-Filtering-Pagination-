import React from 'react'
import PersonLists from './PersonLists';
import Pagination from './Pagination';
import NavBar from './NavBar';

export default function PersonListHooks() {
    return (
        <div>
            <NavBar />
            <PersonLists />
            <Pagination />
        </div>
    )
}
