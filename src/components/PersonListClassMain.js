import React, { Component } from 'react'
import AppContextProvideC from './ContextC'
import PersonListsC from './PersonListsC'

export default class PersonListClassMain extends Component {
    render() {
        return (
            <div>
                <AppContextProvideC>

                <PersonListsC />
                
                </AppContextProvideC>
                
            </div>
        )
    }
}
