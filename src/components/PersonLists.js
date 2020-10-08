import React from 'react'
import React, {useState, useEffect, useContext} from 'react'
import AddListForm from './AddListForm'
import { v4 as uuidv4 } from 'uuid';
import {AppContext} from './Context'


const initialPerson=[
    {id:0, fname:'Tedros', lname:'Tesfay', age:30},
    {id:1, fname:'AAA', lname:'BBB', age:30},
    {id:2, fname:'CCC', lname:'DDD', age:30},
    {id:3, fname:'EEE', lname:'Tesfay', age:30},                  
]

export default function PersonLists() {
    return (
        <div>
            
        </div>
    )
}
