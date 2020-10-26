import React, { Component, Children, createContext } from 'react'

export const AppContextC=createContext();

const {ProviderC} = AppContextC

const initialPerson=[
    {id:0, fname:'Tedros', lname:'Tesfay', age:30},
    {id:1, fname:'aaa', lname:'BBB', age:30},
    {id:2, fname:'CCC', lname:'DDD', age:30},
    {id:3, fname:'EEE', lname:'Tesfay', age:30},
    {id:3, fname:'bb', lname:'ff', age:20}                 
]

class AppContextProvideC extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            person:initialPerson,
            id:0,
            fname:'',
            lname:'',
            age:0
         };
    }

    handleFirstNameC=(e)=>{
        this.setState({fname: e.target.value})
    }
    handleLastnameC=(e)=>{
        this.setState({lname:e.target.value})
    }
    handleFirstAgeC=(e)=>{
        this.setState({age:e.target.value})
    }

    addPersonListClass=()=>{

        const newPerson={id:this.state.person.lenght, fname:this.state.fname, 
            lname:this.state.lname, age:this.state.age}
        this.setState({person: [...this.state.person, newPerson]})
    }

    render() {
        return (
            <AppContextC.Provider value={{state:this.state, addFun:this.addPersonListClass }}>
                
                {this.props.children} 
            </AppContextC.Provider>
            
        );
    }

}

export default AppContextProvideC;