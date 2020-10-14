import React, {createContext, useState} from 'react'

export const AppContext= createContext()


const {Provider} = AppContext

const initialPerson=[
    {id:0, fname:'Tedros', lname:'Tesfay', age:30},
    {id:1, fname:'aaa', lname:'BBB', age:30},
    {id:2, fname:'CCC', lname:'DDD', age:30},
    {id:3, fname:'EEE', lname:'Tesfay', age:30},
    {id:3, fname:'bb', lname:'ff', age:20}                 
]

export const AppContextProvider=(props)=>{
    //export const AppContextProvider=({children})=>{
        const [person, setPerson]=useState(initialPerson)
        const [id, setId]=useState(0)
        const [fname, setFname]=useState('')
        const [lname, setLname]=useState('')
        const [age, setAge]=useState(0)
        const [saveToggle, setSaveToggle]=useState(false)
        const [updItem, setUpdItem]=useState([])
        const [personFinal, setPersonFinal]=useState(initialPerson)
        const [cancelBtn, setCancelBtn]=useState(true)
        const [itemsPerPage, setItemsPerPage]=useState(3)
        const [numPages, setNumPages]=useState(Math.ceil(parseFloat(person.length)/parseFloat(itemsPerPage)))
        const [currPageNum, setCurrpageNum]=useState(0)

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
            setCancelBtn(false)
            setId(editItem.id)
            setFname(editItem.fname)
            setLname(editItem.lname)
            setAge(editItem.age)
            setUpdItem(editItem)
            setPersonFinal(person)
           
        }

        const deletePesron=(delItem)=>{
            setPerson(person.filter(item=> item!==delItem))
            setPersonFinal(person)
            }

            const searhPersons=()=>{

            }

            const cancelUpdate=()=>{
                setSaveToggle(false)
                setCancelBtn(true)
                setFname('')
                setLname('')
                setAge(18)
            }




        return(
            <AppContext.Provider value={[person, setPerson, personFinal, setPersonFinal, fname, setFname,lname, setLname,age,setAge,
                addNewPerson, editPerson, deletePesron, saveToggle, cancelUpdate, cancelBtn,
                itemsPerPage, setItemsPerPage,numPages, setNumPages, currPageNum, setCurrpageNum]}>
                
                {props.children}
                {/* {children} */}
        
            </AppContext.Provider>
        
        // to pass objects
        /* <AppContext.Provider value={{ state, incrementAge, decrementAge }}>
              {children}
            </AppContext.Provider> */
        
        );
        
        }