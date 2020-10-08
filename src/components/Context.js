import React, {createContext, useState} from 'react'

export const AppContext= createContext()


const {Provider} = AppContext

export const AppContextProvider=(props)=>{
    //export const AppContextProvider=({children})=>{
    const [message, setMessage]=useState('cunslumed value')
    const[fname, setFname]=useState('')