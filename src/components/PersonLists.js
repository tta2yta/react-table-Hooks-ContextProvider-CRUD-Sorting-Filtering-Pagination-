import React, {useState, useEffect, useContext} from 'react'
import { v4 as uuidv4 } from 'uuid';
import {AppContext} from './Context'


const initialPerson=[
    {id:0, fname:'Tedros', lname:'Tesfay', age:30},
    {id:1, fname:'aaa', lname:'BBB', age:30},
    {id:2, fname:'CCC', lname:'DDD', age:30},
    {id:3, fname:'EEE', lname:'Tesfay', age:30},                  
]

export default function PersonLists() {

    const [searchByFName, setSearchByFName]=useState('')
    const [searchByLName, setSearchByLName]=useState('')
    const [searchByAge, setSearchByAge]=useState(0)
    const [sortToggle, setSortToggle]=useState(true)
    const [sortIcon, setSortIcon]=useState(true)

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

    const  handleFilter=(e)=>{
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


    const sortPersonList=(feildName)=>{
        let  sortedData;
        setSortToggle(!sortToggle)
        setSortIcon(!sortIcon)
        if(sortToggle==true){
            if(feildName==='age')
            sortedData= person.sort((a, b) => (Number(a[feildName]) > Number(b[feildName])) ? 1 : -1)
            else
            sortedData= person.sort((a, b) => (a[feildName].toUpperCase() > b[feildName].toUpperCase()) ? 1 : -1)
         //sortedData=person.sort((a, b)=> a.fname - b.fname)
        }
          
       if(sortToggle==false){
        if(feildName==='age')
        sortedData= person.sort((a, b) => (Number(a[feildName]) < Number(b[feildName])) ? 1 : -1)
        else
        sortedData= person.sort((a, b) => (a[feildName].toUpperCase() < b[feildName].toUpperCase()) ? 1 : -1)
        //sortedData=person.sort((a, b)=> b.fname - a.fname)
       }
        setPerson(sortedData)
    }



            // to do side effect when Dom changes 
            useEffect(()=>{

            //call it later after performing the DOM updates.
            //By default, it runs both after the first render and after every update.
            //Mounting, Rendering or    after render
            setPerson(person)
            console.log(person)
           
            // React performs the cleanup when the component unmounts.
            return()=>{
                // document.getElementById('searchfname').removeEventListener("keyup", handlechange)
                 //setPerson(person)
            }
        },[person, sortToggle])

        useEffect(() => {
            
            document.getElementById('searchfname').addEventListener("keyup", handleFilter)
            document.getElementById('searchlname').addEventListener("keyup", handleFilter)
            document.getElementById('searchage').addEventListener("keyup", handleFilter)
            
            return () => {
             document.getElementById('searchfname').removeEventListener("keyup", handleFilter)
             document.getElementById('searchlname').removeEventListener("keyup", handleFilter)
             document.getElementById('searchage').removeEventListener("keyup", handleFilter)
                
            }
        }, [searchByFName])

        useEffect(()=>{
            setPerson(initialPerson)
        },[])


    return (
        <div>
             <h5>React Table with Full Functionality</h5>

             <table border="1" width="100px">
                <tr>
                    <th><button onClick={()=>sortPersonList('fname')}><i class={`fa fa-sort-${sortIcon? 'asc' : 'desc'}`}></i>Fname</button></th>
                    <th><button onClick={()=>sortPersonList('lname')}><i class={`fa fa-sort-${sortIcon? 'asc' : 'desc'}`}></i>Lname</button></th>
                    <th><button onClick={()=>sortPersonList('age')}><i class={`fa fa-sort-${sortIcon? 'asc' : 'desc'}`}></i>Age</button></th>
                </tr>
                <tr>
                    
                    <th>  <input type="text" id="searchfname" name="searchfname" value={searchByFName} onChange={handleSearchByName} /></th>
                    <th><input type="text" id="searchlname" name="searchlname" value={searchByLName} onChange={handleSearchByName} /></th>
                    <th><input type="text" id="searchage" name="searchage" value={searchByAge} onChange={handleSearchByName} /></th>
                </tr>
                {console.log(person)}
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
