import React, {useState, useEffect, useContext} from 'react'
import { v4 as uuidv4 } from 'uuid';
import {AppContext} from './Context'




export default function PersonLists() {

    const [person, fname, setFname,lname, setLname,age,setAge,
        addNewPerson, editPerson, deletePesron, saveToggle]=useContext(AppContext)


        const handleFname=e=>{
            setFname(e.target.value)
        }

        const handelLname=e=>{
            setLname(e.target.value)
        }
        const handelAge=e=>{
            setAge(e.target.value)
        }

              // to do side effect when Dom changes 
              useEffect(()=>{

                //call it later after performing the DOM updates.
                //By default, it runs both after the first render and after every update.
                //Mounting, Rendering or    after render
                console.log(person)
    
                // React performs the cleanup when the component unmounts.
                return()=>{
    
                }
            }, [person])


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
