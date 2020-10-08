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
             <h5>React Table with Full Functionality</h5>

             <table border="1" width="100px">
                <tr>
                    <th>Fname</th>
                    <th>Lname</th>
                    <th>age</th>
                    
                </tr>
                <tr>
                    
                    <th>  <input type="text" name="fname" value={fname} onChange={handleFname} /></th>
                    <th><input type="text" name="lname" value={lname} onChange={handelLname} /></th>
                    <th><input type="text" name="age" value={age} onChange={handelAge} /></th>
                   <th colSpan="2"><input type="button" value={saveToggle ? 'Update':'Add person'} onClick={addNewPerson} /></th> 
                    
                </tr>
                {person.map((item, key)=>
            (
               
                    <tr key={key}>
                        <td id="fname">{item.fname}</td>
                        <td id="lname">{item.lname}</td>
                        <td id="age">{item.age}</td>
                        <td><button  onClick={()=>editPerson(item)} >Edit</button></td> 
                        <td><input type="button" value="Delete" onClick={()=>deletePesron(item)} /></td> 
                    
                    </tr>

                )
                )}
            </table>
            
        </div>
    )
}
