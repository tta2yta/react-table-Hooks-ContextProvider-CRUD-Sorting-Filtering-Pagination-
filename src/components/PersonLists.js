import React, {useState, useEffect, useContext} from 'react'
import { v4 as uuidv4 } from 'uuid';
import {AppContext} from './Context'




export default function PersonLists() {

    const [searchByFName, setSearchByFName]=useState('')
    const [searchByLName, setSearchByLName]=useState('')
    const [searchByAge, setSearchByAge]=useState(0)

    const [person, setPerson, personFinal, setPersonFinal, fname, setFname,lname, setLname,age,setAge,
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

    const  handleSearchByName=(e)=>{
       // alert(e.target.id)
        if(e.target.id=="searchfname")
        setSearchByFName(e.target.value)
        
        if(e.target.id=="searchlname")
        setSearchByLName(e.target.value)

        if(e.target.id=="searchage")
        setSearchByAge(e.target.value)
        
    }

    const  handlechange=(e)=>{
            //alert(e.target.id)
            console.log(personFinal)
            if(e.target.value==""){
                setPerson(personFinal)
                return;
            }
            let filteredPersons;
            switch(e.target.id){
                case "searchfname":
                    filteredPersons= personFinal.filter(item=>item.fname.includes(e.target.value))
                    break; 
                case "searchlname":
                    filteredPersons= personFinal.filter(item=>item.lname.includes(e.target.value))
                    break;               
                case "searchage":
                    filteredPersons= personFinal.filter(item=>item.age==e.target.value)
                    break;
            }
            setPerson(filteredPersons) 
    }

    

            // to do side effect when Dom changes 
            useEffect(()=>{

            //call it later after performing the DOM updates.
            //By default, it runs both after the first render and after every update.
            //Mounting, Rendering or    after render
            console.log("person object at useeffect"+ person)
            

            // React performs the cleanup when the component unmounts.
            return()=>{
                // document.getElementById('searchfname').removeEventListener("keyup", handlechange)
                // setPerson(person)
            }
        }, [person])

        useEffect(() => {
            
            document.getElementById('searchfname').addEventListener("keyup", handlechange)
            document.getElementById('searchlname').addEventListener("keyup", handlechange)
            document.getElementById('searchage').addEventListener("keyup", handlechange)
            
            return () => {
             document.getElementById('searchfname').removeEventListener("keyup", handlechange)
             document.getElementById('searchlname').removeEventListener("keyup", handlechange)
             document.getElementById('searchage').removeEventListener("keyup", handlechange)
                
            }
        }, [searchByFName])


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
                    
                    <th>  <input type="text" id="searchfname" name="searchfname" value={searchByFName} onChange={handleSearchByName} /></th>
                    <th><input type="text" id="searchlname" name="searchlname" value={searchByLName} onChange={handleSearchByName} /></th>
                    <th><input type="text" id="searchage" name="searchage" value={searchByAge} onChange={handleSearchByName} /></th>
                   
                    
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

<tr>
                    
                    <th>  <input type="text" name="fname" value={fname} onChange={handleFname} /></th>
                    <th><input type="text" name="lname" value={lname} onChange={handelLname} /></th>
                    <th><input type="text" name="age" value={age} onChange={handelAge} /></th>
                   <th colSpan="2"><input type="button" value={saveToggle ? 'Update':'Add person'} onClick={addNewPerson} /></th> 
                    
                </tr>
            </table>
            
        </div>
    )
}
