import React, {createContext, useState} from 'react'

export const AppContext= createContext()


const {Provider} = AppContext


export const AppContextProvider=(props)=>{
    //export const AppContextProvider=({children})=>{
        const[person, setPerson]=useState([])
        const[id, setId]=useState(0)
        const[fname, setFname]=useState('')
        const[lname, setLname]=useState('')
        const[age, setAge]=useState(0)
        const[saveToggle, setSaveToggle]=useState(false)
        const[updItem, setUpdItem]=useState([])
        const [personFinal, setPersonFinal]=useState([])

        const addNewPerson=(e)=>{

    

            if(saveToggle){
                // const updItemIndex=person.findIndex(item=> item.id==updItem.id)
                // person[updItemIndex]={fname, lname, age}
                // setSaveToggle(false)
        
                let tempPerson= person.map(item=>{
                   return item.id===id ? {...item, fname, lname, age} : item;
                })
                setPerson(tempPerson)
                setPersonFinal(tempPerson)
            }
            else{
                const newPerson={id:person.length,fname:fname, lname:lname, age}
                //alert(newPerson)
                //console.log(newPerson)
                setPerson(person=> [...person, newPerson])
                setPersonFinal(person=> [...person, newPerson])
                //console.log(person)
                
            }
        }

        const  editPerson =(editItem)=>{
            setSaveToggle(true)
            setId(editItem.id)
            setFname(editItem.fname)
            setLname(editItem.lname)
            setAge(editItem.age)
            setUpdItem(editItem)
           
        }

        const deletePesron=(delItem)=>{
            setPerson(person.filter(item=> item!==delItem))
            setPersonFinal(person)
            }

            const searhPersons=()=>{

            }




        return(
            <AppContext.Provider value={[person, setPerson, personFinal, setPersonFinal, fname, setFname,lname, setLname,age,setAge,
                addNewPerson, editPerson, deletePesron, saveToggle]}>
                
                {props.children}
                {/* {children} */}
        
            </AppContext.Provider>
        
        // to pass objects
        /* <AppContext.Provider value={{ state, incrementAge, decrementAge }}>
              {children}
            </AppContext.Provider> */
        
        );
        
        }