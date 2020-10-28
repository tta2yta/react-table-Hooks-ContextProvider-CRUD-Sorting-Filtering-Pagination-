import React, { Component } from 'react'

export default class PersonListTbl extends Component {

  constructor(props) {
    super(props);
    this.state = { 
    searchByFname:'',
    searchByLname:'',
    searchByAge:0,
    sortIcon:true,
    sortToggle:true
     };
   
}

handelSearch=(e)=>{
  if(e.target.id=='searchfname')
  this.setState({searchByFname:e.target.value})
  else if(e.target.id==='searchlname')
  this.setState({searchByLname:e.target.value})
  else if(e.target.id==='searchage')
  this.setState({searchByAge:e.target.value})
}

sortPersonList=(fieldName)=>{
  let sortedDataPerson="", soretedFilteredDataPerson=""
  this.setState({sortToggle:!this.state.sortToggle})
  this.setState({sortIcon:!this.state.sortIcon})
  if(this.state.sortToggle===true){
    if(fieldName==='age'){
      sortedDataPerson=this.props.personlist.state.person.sort((a,b)=>{
        if(a[fieldName] < b[fieldName])
        return 1
        else
        return -1

        return 0;
      })
    }
    else{
      sortedDataPerson=this.props.personlist.state.person.sort((a,b)=> a[fieldName].toUpperCase() < b[fieldName].toUpperCase() ? 1 : -1)
      soretedFilteredDataPerson=this.props.personlist.state.filteredPersonList.sort((a,b)=> a[fieldName].toUpperCase() < b[fieldName].toUpperCase() ? 1 : -1)
    }
    
  }
  else if(this.state.sortToggle===false){
    if(fieldName==='age'){
      sortedDataPerson=this.props.personlist.state.person.sort((a,b)=>{
        if(a[fieldName] > b[fieldName])
        return 1
        else
        return -1

        return 0;
      })

    }
    else
    {
      sortedDataPerson=this.props.personlist.state.person.sort((a,b)=> a[fieldName].toUpperCase() > b[fieldName].toUpperCase() ? 1 : -1)
      soretedFilteredDataPerson=this.props.personlist.state.filteredPersonList.sort((a,b)=> a[fieldName].toUpperCase() > b[fieldName].toUpperCase() ? 1 : -1)
    }
    
    
  }
}



componentDidMount(){
  console.log(this.props.personlist.state.person)
   document.getElementById("searchfname").addEventListener("keyup", this.props.personlist.handelFilter)
   document.getElementById("searchlname").addEventListener("keyup", this.props.personlist.handelFilter)
   document.getElementById("searchage").addEventListener("keyup", this.props.personlist.handelFilter)


}


componentDidUpdate(){

}

componentWillUnmount(){
   document.getElementById("searchfname").removeEventListener("keyup", this.props.personlist.handelFilter)
   document.getElementById("searchlname").removeEventListener("keyup", this.props.personlist.handelFilter)
   document.getElementById("searchage").removeEventListener("keyup", this.props.personlist.handelFilter)

}



render(){
let personListResult=[]
if(this.props.personlist.state.filterToggle===true)
personListResult=this.props.personlist.state.person
else
personListResult=this.props.personlist.state.filteredPersonList

    return (
        <div>
          {console.log(this.props.personlist.state.person)}
          <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th><button type="button" class="btn btn-primary" onClick={()=>this.sortPersonList('fname')}><i class={`fa fa-sort-${this.state.sortIcon? 'asc' : 'desc'}`}></i>Fname</button></th>
        <th><button type="button" class="btn btn-primary" onClick={()=>this.sortPersonList('lname')} ><i class={`fa fa-sort-${this.state.sortIcon? 'asc' : 'desc'}`}></i>Lname</button></th>
        <th><button type="button" class="btn btn-primary" onClick={()=>this.sortPersonList('age')}><i class={`fa fa-sort-${this.state.sortIcon? 'asc' : 'desc'}`}></i>Age</button></th>
      </tr>
    </thead>
    <tbody>
      <tr>
       
        <td><input type="text" id="searchfname" name="searchfname" placeholder="Search By First Name" value={this.state.searchByFname} onChange={this.handelSearch}/></td>
        <td><input type="text" id="searchlname" name="searchlname" placeholder="Search By Last Name" value={this.state.searchByLname} onChange={this.handelSearch} /></td>
        <td><input type="text" id="searchage" name="searchage" placeholder="Search By Age" value={this.searchByAge} onChange={this.handelSearch}/></td>
      </tr>
      {personListResult.map((item, key)=>
            (  
               
                    <tr key={key}>
                        <td id="fname">{item.fname}</td>
                        <td id="lname">{item.lname}</td>
                        <td id="age">{item.age}</td>
                        <td><button type="button" class="btn btn-warning"  onClick={()=>this.props.personlist.editPersonListClass(item)} >Edit</button></td> 
                        <td><input type="button" class="btn btn-danger" value="Delete" onClick={()=>this.props.personlist.deletePerson(item)} /></td> 
                    
                    </tr>

                )
            )
        }
      <tr>
        <td> <input type="text" name="fname" placeholder="Enter First Name" value={this.props.personlist.state.fname} onChange={this.props.personlist.handleFirstNameC} /></td>
        <td><input type="text" name="lname" placeholder="Enter Last Name" value={this.props.personlist.state.lname} onChange={this.props.personlist.handleLastNameC} /></td>
        <td><input type="text" name="age" placeholder="Enter Age" value={this.props.personlist.state.age} onChange={this.props.personlist.handleAgeC} /></td>
        <td><input type="button" class="btn btn-primary" id="add" value={this.props.personlist.state.saveEditToggle?"Add Person":"Update Person"} onClick={this.props.personlist.addFun} /></td> 
        <td><input type="button" class="btn btn-danger" value="Cancel Update" onClick={this.props.personlist.cancelUpdate} disabled="" /></td> 
      </tr>
    </tbody>
  </table>
        </div>
    )
      }
}
