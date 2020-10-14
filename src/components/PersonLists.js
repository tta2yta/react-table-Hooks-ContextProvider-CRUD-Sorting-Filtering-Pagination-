import React, {useState, useEffect, useContext} from 'react'
import { v4 as uuidv4 } from 'uuid';
import {AppContext} from './Context'



export default function PersonLists() {
    const [person, setPerson, personFinal, setPersonFinal, fname, setFname,lname, setLname,age,setAge,
        addNewPerson, editPerson, deletePesron, saveToggle, cancelUpdate, cancelBtn,
        itemsPerPage, setItemsPerPage,numPages, setNumPages, currPageNum, setCurrpageNum]=useContext(AppContext)

    const [searchByFName, setSearchByFName]=useState('')
    const [searchByLName, setSearchByLName]=useState('')
    const [searchByAge, setSearchByAge]=useState(0)
    const [sortToggle, setSortToggle]=useState(true)
    const [sortIcon, setSortIcon]=useState(true)
    const [num, setNum]=useState(Math.ceil(parseFloat(person.length)/parseFloat(itemsPerPage)))

    


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
            sortedData= person.sort((a, b) => {
                if(Number(a[feildName]) < Number(b[feildName])) 
                return 1
                else
                return -1
     
                return 0
             })
            else
            sortedData= person.sort((a, b) => (a[feildName].toUpperCase() > b[feildName].toUpperCase()) ? 1 : -1)
         //sortedData=person.sort((a, b)=> a.fname - b.fname)
        }
          
       if(sortToggle==false){
        if(feildName==='age')
        sortedData= person.sort((a, b) => {
           if(Number(a[feildName]) < Number(b[feildName])) 
           return 1
           else
           return -1

           return 0
        })
      else
        sortedData= person.sort((a, b) => (a[feildName].toUpperCase() < b[feildName].toUpperCase()) ? 1 : -1)
        //sortedData=person.sort((a, b)=> b.fname - a.fname)
       }
        setPerson(sortedData)
    }



    useEffect(()=>{
        let val=(Math.ceil(parseFloat(personFinal.length)/parseFloat(itemsPerPage)))
        //console.log(val1)
        setNumPages(val)
        setPerson(person.slice(0, itemsPerPage))
    },[])

            // to do side effect when Dom changes/ after render
            useEffect(()=>{

            //call it later after performing the DOM updates.
            //By default, it runs both after the first render and after every update.
            //Mounting, Rendering or    after render
            
            console.log(person)
            //person.slice(currPageNum *3, 3)
            console.log(numPages)
            console.log(currPageNum)
            //person.slice(currPageNum * 3, 3)
            let val=(Math.ceil(parseFloat(personFinal.length)/parseFloat(itemsPerPage)))
            //console.log(val1)
            setNumPages(val)
           
            // React performs the cleanup when the component unmounts.
            return()=>{
                // document.getElementById('searchfname').removeEventListener("keyup", handlechange)
                 //setPerson(person)
            }
        },[person, sortToggle, currPageNum, numPages])

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

      


    return (
        <div>
             <h5>React Table with Full Functionality</h5>

             <table border="1" width="100px">
                <tr>
                    <th><button  onClick={()=>sortPersonList('fname')}><i class={`fa fa-sort-${sortIcon? 'asc' : 'desc'}`}></i>Fname</button> </th>
                    <th><button onClick={()=>sortPersonList('lname')}><i class={`fa fa-sort-${sortIcon? 'asc' : 'desc'}`}></i>Lname</button></th>
                    <th><button onClick={()=>sortPersonList('age')}><i class={`fa fa-sort-${sortIcon? 'asc' : 'desc'}`}></i>Age</button></th>
                </tr>
                <tr>
                    
                    <th>  <input type="text" id="searchfname" name="searchfname" value={searchByFName} onChange={handleSearchByName} /></th>
                    <th><input type="text" id="searchlname" name="searchlname" value={searchByLName} onChange={handleSearchByName} /></th>
                    <th><input type="text" id="searchage" name="searchage" value={searchByAge} onChange={handleSearchByName} /></th>
                </tr>
                {console.log(numPages)}
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
                    
                    <th> <input type="text" name="fname" value={fname} onChange={handleFname} /></th>
                    <th><input type="text" name="lname" value={lname} onChange={handelLname} /></th>
                    <th><input type="text" name="age" value={age} onChange={handelAge} /></th>
                   <th><input type="button" id="add" value={saveToggle ? 'Update':'Add Person'} onClick={addNewPerson} /></th> 
                   <th><input type="button" value="Cancel Update" onClick={cancelUpdate} disabled={cancelBtn ? 'true' : ''} /></th> 
                </tr>
            </table>
            


            <div class="container">
  <h2>Dark Striped Table</h2>
  <p>Combine .table-dark and .table-striped to create a dark, striped table:</p>            
  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th><button type="button" class="btn btn-primary" onClick={()=>sortPersonList('fname')}><i class={`fa fa-sort-${sortIcon? 'asc' : 'desc'}`}></i>Fname</button></th>
        <th><button type="button" class="btn btn-primary" onClick={()=>sortPersonList('lname')}><i class={`fa fa-sort-${sortIcon? 'asc' : 'desc'}`}></i>Lname</button></th>
        <th><button type="button" class="btn btn-primary" onClick={()=>sortPersonList('age')}><i class={`fa fa-sort-${sortIcon? 'asc' : 'desc'}`}></i>Age</button></th>
      </tr>
    </thead>
    <tbody>
      <tr>
       
        <td><input type="text" id="searchfname" name="searchfname" placeholder="Search By First Name" value={searchByFName} onChange={handleSearchByName} /></td>
        <td><input type="text" id="searchlname" name="searchlname" placeholder="Search By Last Name" value={searchByLName} onChange={handleSearchByName} /></td>
        <td><input type="text" id="searchage" name="searchage" placeholder="Search By Age" value={searchByAge} onChange={handleSearchByName} /></td>
      </tr>
      {person.map((item, key)=>
            (  
               
                    <tr key={key}>
                        <td id="fname">{item.fname}</td>
                        <td id="lname">{item.lname}</td>
                        <td id="age">{item.age}</td>
                        <td><button type="button" class="btn btn-warning"  onClick={()=>editPerson(item)} >Edit</button></td> 
                        <td><input type="button" class="btn btn-danger" value="Delete" onClick={()=>deletePesron(item)} /></td> 
                    
                    </tr>

                )
            )
        }
      <tr>
        <td> <input type="text" name="fname" placeholder="Enter First Name" value={fname} onChange={handleFname} /></td>
        <td><input type="text" name="lname" value={lname} onChange={handelLname} /></td>
        <td><input type="text" name="age" value={age} onChange={handelAge} /></td>
        <td><input type="button" class="btn btn-primary" id="add" value={saveToggle ? 'Update':'Add Person'} onClick={addNewPerson} /></td> 
        <td><input type="button" class="btn btn-danger" value="Cancel Update" onClick={cancelUpdate} disabled={cancelBtn ? 'true' : ''} /></td> 
      </tr>
    </tbody>
  </table>
</div>


        </div>
    )
}
