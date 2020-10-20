import React, { Component } from 'react'
import AppContextProvideC, { AppContextC } from './ContextC'


const initialPerson=[
    {id:0, fname:'Tedros', lname:'Tesfay', age:30},
    {id:1, fname:'aaa', lname:'BBB', age:30},
    {id:2, fname:'CCC', lname:'DDD', age:30},
    {id:3, fname:'EEE', lname:'Tesfay', age:30},
    {id:3, fname:'bb', lname:'ff', age:20}                 
]
const data = [{"id": "01", "name": "Hi"}, {"id": "02", "name": "Hello"}];

export default class PersonListsC extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            person:initialPerson,
            fname:'',
            lname:'',
            age:0
         };
       
    }

    
    render() {

        return (
            <div>
                  {/* {data.map(({ id, name }) => <span key={id}>{name}</span>)} */}
                {console.log(this.state.person)}
        {this.state.person.map((item, key)=> <li>{item.fname}</li>)}
              <AppContextProvideC>
                  <AppContextC.Consumer>
                      {(context)=>{ 

                            console.log(context.person)

                          context.person.map((item, key)=>
                          ( 
                            //console.log(item[key].fname)
                            <ul key={key}>
                                <li>{item.fname}</li>
                            </ul>
                          ) )
   
                      }

                      }
                  </AppContextC.Consumer>
              </AppContextProvideC>
                
            </div>
        )
    }
}
