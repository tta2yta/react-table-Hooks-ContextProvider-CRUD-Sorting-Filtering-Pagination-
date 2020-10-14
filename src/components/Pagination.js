import React, {useState, useEffect, useContext} from 'react'
import { v4 as uuidv4 } from 'uuid';
import {AppContext} from './Context'

export default function Pagination() {

    // const [person, setPerson, personFinal, setPersonFinal, 
    //     itemsPerPage, setItemsPerPage,numPages, setNumPages, currPageNum, setCurrpageNum]=useContext(AppContext)

const [person, setPerson, personFinal, setPersonFinal, fname, setFname,lname, setLname, age, setAge,
        addNewPerson, editPerson, deletePesron, saveToggle, cancelUpdate, cancelBtn,
        itemsPerPage, setItemsPerPage,numPages, setNumPages, currPageNum, setCurrpageNum]=useContext(AppContext)

        const prevBtnHandler=()=>{
    if(currPageNum != 0)
    {
        currPageNum <= 0 ? setCurrpageNum(0) : setCurrpageNum(prevState=> --prevState)
    }
   

}

const nextBtnHandler=()=>{
    //alert(numPages)
    if(currPageNum + 1 < numPages)
    {
        
        currPageNum + 1 == numPages ? setCurrpageNum(numPages) : setCurrpageNum(prevState=> ++prevState)
       // alert(currPageNum)
    }
}
useEffect(()=>{ 
    setPerson(prevState=>personFinal.slice((currPageNum * 3), (currPageNum *3 + itemsPerPage)))}
, [currPageNum])


    return (
        <div className="pagination">
            <p>
            <button onClick={()=>setCurrpageNum(0)} value="First" disabled={`${currPageNum == 0 ? true : ''}`} >
            <i class="fa fa-fast-backward"></i>
            </button>
            <button onClick={()=>prevBtnHandler()} value="Prev" width="30px" height="10px"
            disabled={`${currPageNum == 0 ? 'true' : ''}`} ><i class="fa fa-step-backward"></i></button>
            <input type="button" onClick="" value={`Current Page : ${currPageNum + 1} ` }/>
            <button onClick={()=>nextBtnHandler()} value="Next" disabled={`${currPageNum + 1 == numPages ? true : ''}`} >
            <i class="fa fa-step-forward"></i>
            </button>
            <button onClick={()=>setCurrpageNum(numPages - 1)} value="Last" disabled={`${currPageNum == numPages - 1 ? true : ''}`} >
            <i class="fa fa-fast-forward"></i>
            </button>
              </p>
        </div>
      
    )
}
