import React from 'react'
import AppContextProvideC from './ContextC'
import NavBar from './NavBar'
import PersonListsC from './PersonListsC'

export default function () {
    return (
        <div>
            <NavBar />
            <h2>React Table with Class Components</h2>
         <AppContextProvideC>
         <PersonListsC />
         </AppContextProvideC>
                    
          
        </div>
    )
}
