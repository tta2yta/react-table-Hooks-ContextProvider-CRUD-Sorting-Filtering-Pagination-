import React, { Component } from 'react'
import AppContextProvideC, { AppContextC } from './ContextC'
import PaginationC from './PaginationC';
import PersonListTbl from './PersonListTbl';


const initialPerson=[
    {id:0, fname:'Tedros', lname:'Tesfay', age:30},
    {id:1, fname:'aaa', lname:'BBB', age:30},
    {id:2, fname:'CCC', lname:'DDD', age:30},
    {id:3, fname:'EEE', lname:'Tesfay', age:30},
    {id:3, fname:'bb', lname:'ff', age:20}                 
]
const data = [{"id": "01", "name": "Hi"}, {"id": "02", "name": "Hello"}];

export default class PersonListsC extends Component {

     static contextType=AppContextC
    constructor(props) {
        super(props);
        this.state = { 
        
         };
       
    }


    
    render() {
         
//const{person, fname, lname, age}=this.context


        return ( 
            <div className="kkkk">
                {console.log(this.context)}
                <PersonListTbl personlist={this.context} />
                <PaginationC />
        {/* {this.state.person.map((item, key)=> <li>{item.fname}</li>)} */}
              {/* <AppContextProvideC>
                  <AppContextC.Consumer>
                  
                      {(context)=>{

                                let personss=context.person

                                console.log(personss)
                                personss.map((item, key)=>
                          
                                <li key={key}>kkk</li> )
                      }
                      }
                     
                  
                  </AppContextC.Consumer>
              </AppContextProvideC> */}
            
            </div>
        )
    }
}
