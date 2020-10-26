import React from 'react'

export default function PersonListTbl(props) {
    return (
        <div>
          {console.log(props)}
          <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th><button type="button" class="btn btn-primary" >Fname</button></th>
        <th><button type="button" class="btn btn-primary" >Lname</button></th>
        <th><button type="button" class="btn btn-primary" >Age</button></th>
      </tr>
    </thead>
    <tbody>
      <tr>
       
        <td><input type="text" id="searchfname" name="searchfname" placeholder="Search By First Name" value="" onChange=""/></td>
        <td><input type="text" id="searchlname" name="searchlname" placeholder="Search By Last Name" value="" onChange="" /></td>
        <td><input type="text" id="searchage" name="searchage" placeholder="Search By Age" value="" onChange="" /></td>
      </tr>
      {props.personlist.state.person.map((item, key)=>
            (  
               
                    <tr key={key}>
                        <td id="fname">{item.fname}</td>
                        <td id="lname">{item.lname}</td>
                        <td id="age">{item.age}</td>
                        <td><button type="button" class="btn btn-warning"  onClick="" >Edit</button></td> 
                        <td><input type="button" class="btn btn-danger" value="Delete" onClick="" /></td> 
                    
                    </tr>

                )
            )
        }
      <tr>
        <td> <input type="text" name="fname" placeholder="Enter First Name" value="" onChange="" /></td>
        <td><input type="text" name="lname" placeholder="Enter Last Name" value="" onChange="" /></td>
        <td><input type="text" name="age" placeholder="Enter Age" value="" onChange="" /></td>
        <td><input type="button" class="btn btn-primary" id="add" value="Add Person" onClick={props.personlist.addFun} /></td> 
        <td><input type="button" class="btn btn-danger" value="Cancel Update" onClick="" disabled="" /></td> 
      </tr>
    </tbody>
  </table>
        </div>
    )
}
