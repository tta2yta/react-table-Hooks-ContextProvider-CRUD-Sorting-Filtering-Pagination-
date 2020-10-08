import React, {createContext, useState} from 'react'

export const AppContext= createContext()


const {Provider} = AppContext

export const AppContextProvider=(props)=>{
    //export const AppContextProvider=({children})=>{
        const[person, setPerson]=useState(initialPerson)
        const[id, setId]=useState(0)
        //const[fname, setFname]=useState('')
        const[lname, setLname]=useState('')
        const[age, setAge]=useState(0)
        const[saveToggle, setSaveToggle]=useState(false)
        const[updItem, setUpdItem]=useState([])

        const handelLname=e=>{
            setLname(e.target.value)
        }
        const handelAge=e=>{
            setAge(e.target.value)
        }