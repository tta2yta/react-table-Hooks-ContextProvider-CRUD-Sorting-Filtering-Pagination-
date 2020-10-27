import React, { Component, Children, createContext } from 'react'

export const AppContextC=createContext();

const {ProviderC} = AppContextC

const initialPerson=[
    {id:0, fname:'Tedros', lname:'Tesfay', age:30},
    {id:1, fname:'aaa', lname:'BBB', age:30},
    {id:2, fname:'CCC', lname:'DDD', age:30},
    {id:3, fname:'EEE', lname:'Tesfay', age:30},
    {id:3, fname:'bbaac', lname:'ff', age:20}                 
]

class AppContextProvideC extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            person:initialPerson,
            id:0,
            fname:'',
            lname:'',
            age:0,
            saveEditToggle:true
         };
    }

    handleFirstNameC=(e)=>{
    
        this.setState({fname: e.target.value})
    }
    handleLastNameC=(e)=>{
        this.setState({lname:e.target.value})
    }
    handleAgeC=(e)=>{
        this.setState({age:e.target.value})
    }

    addPersonListClass=()=>{

        if(this.state.saveEditToggle){
            const newPerson={id:this.state.person.lenght, fname:this.state.fname, 
                lname:this.state.lname, age:this.state.age}
            this.setState({person: [...this.state.person, newPerson]})
        }
        else{
            alert(this.state.id)
           let tempPerson=this.state.person.map(item=> item.id===this.state.id ? {...item, fname:this.state.fname,
        lname:this.state.lname, age:this.state.age}:item)
        this.setState({person:tempPerson})
        }
      
    }
    editPersonListClass=(personEdited)=>{
        this.setState({fname:personEdited.fname})
        this.setState({lname:personEdited.lname})
        this.setState({age:personEdited.age})
        this.setState({id:personEdited.id})
        this.setState({saveEditToggle:false})

    }

    deletePerson=(delItem)=>{
        let tempPerson=this.state.person.filter(item=> item !== delItem)
        this.setState({person:tempPerson})
    }

    cancelUpdate=()=>{
        this.setState({saveEditToggle:true})
        this.setState({fname:""})
        this.setState({lname:""})
        this.setState({age:""})
    }   

    handelFilter=(e)=>{
        if(e.target.value===''){
            this.setState({person:initialPerson})
            return;
        }
        let filteredPerson=""
        if(e.target.id ==='searchfname'){
             filteredPerson=this.state.person.filter(item=>item.fname.includes(e.target.value))
            
            
        }
        else if(e.target.id==='searchlname'){
             filteredPerson=this.state.person.filter(item=>item.lname.includes(e.target.value))
             console.log(e.target.value)
             console.log(filteredPerson)
        }
        else if(e.target.id==='searchage'){
            filteredPerson=this.state.person.filter(item=>item.age==e.target.value)
        }
        this.setState({person:filteredPerson})
        console.log(this.state.person)
        
      }


    render() {
        return (
            <AppContextC.Provider value={{state:this.state, addFun:this.addPersonListClass, handleFirstNameC:this.handleFirstNameC,
            handleLastNameC:this.handleLastNameC, handleAgeC:this.handleAgeC, editPersonListClass:this.editPersonListClass,
            cancelUpdate:this.cancelUpdate, deletePerson:this.deletePerson, handelFilter:this.handelFilter }}>
                
                {this.props.children} 
            </AppContextC.Provider>
            
        );
    }

}

export default AppContextProvideC;