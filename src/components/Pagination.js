import { useEffect } from "react"
import React, {useState, useContext} from 'react'
import {AppContext} from "./Context"

export default function Pagination() {

    const [person, setPerson, personFinal, setPersonFinal, 
        itemsPerPage, setItemsPerPage,numPages, setNumPages, currPageNum, setCurrpageNum]=useContext(AppContext)

const prevBtnHandler=()=>{
    alert(itemsPerPage)
    currPageNum <= 0 ? setCurrpageNum(0) : setCurrpageNum(--currPageNum)
    setPerson(person.slice(currPageNum * 3 , 3))

}

const nextBtnHandler=()=>{
    //alert(itemsPerPage)
    currPageNum === person.lenght ? setCurrpageNum(numPages) : setCurrpageNum(++currPageNum)
    setPerson(person.slice(currPageNum * 3 , 3))

}

    return (
        <div>
            <input type="button" onClick={()=>prevBtnHandler()} value="Prev" width="10px" height="10px"/>
            <input type="button" onClick="" value="Current Page : " />
            <input type="button" onClick={()=>nextBtnHandler()} value="Next" />
        </div>
    )
}
