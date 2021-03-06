import React, { Component, Children, createContext } from 'react'

export const AppContextC=createContext();

const {ProviderC} = AppContextC

const initialPerson=[
    {id:0, fname:'Tedros', lname:'Tesfay', age:30},
    {id:1, fname:'aaa', lname:'BBB', age:30},
    {id:2, fname:'CCC', lname:'DDD', age:30},
    {id:3, fname:'EEE', lname:'Tesfay', age:30},
    {id:4, fname:'bbaac', lname:'ff', age:20}                 
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
            saveEditToggle:true,
            filterToggle:true,
            filteredPersonList:[],
            numPages:0,
            itemsPerPage:3,
            currentPage:0,
            prevCurrentPageSate:0,
            prevBtnFlag:true,
            nextBtnFlag:false
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

        if(this.state.fname==='' || this.state.lname==='' || this.state.age===''){
            alert("Please Enter a Value in the Field ")
            return;
        }
        if(this.state.saveEditToggle){
            const newPerson={id:this.state.person.lenght, fname:this.state.fname, 
                lname:this.state.lname, age:this.state.age}
            this.setState({person: [newPerson, ...this.state.person]})
            if(this.state.filterToggle===false)
            this.setState({filteredPersonList:[...this.state.filteredPersonList, newPerson]})
            console.log(this.state.person)
            let numPages=(Math.ceil(parseFloat(this.state.person.length)/parseFloat(this.state.itemsPerPage)))
            this.handleNumPages(numPages)
        }
        else{
            //alert(this.state.id)
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
        let numPages=(Math.ceil(parseFloat(this.state.person.length)/parseFloat(this.state.temsPerPage)))
        this.props.personlist.handleNumPages(numPages)
    }



    cancelUpdate=()=>{
        this.setState({saveEditToggle:true})
        this.setState({fname:""})
        this.setState({lname:""})
        this.setState({age:""})
    }   



    handelFilter=(e)=>{
        
        if(e.target.value===''){
            this.setState({person:this.state.person})
            this.setState({filterToggle:true})
            return;
        }
        this.setState({filterToggle:false})
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
        this.setState({filteredPersonList:filteredPerson})
        console.log(this.state.person)
        
      }

      handleCurrentPage=(param1)=>{
          
          console.log(this.state.person)
          //this.setState({person:this.state.person.slice(3, this.state.currentPage + this.state.itemsPerPage)})
          this.setState({prevCurrentPageSate:this.state.prevCurrentPageSate})
          this.setState({currentPage:param1}, this.updatePagingElements)
          
         
         
    }

    handleNumPages=(totalNumPages)=>{
        this.setState({numPages:totalNumPages})
    }
    prevBtnHandler=()=>{
       
        this.setState({nextBtnFlag:false})
        this.setState({currentPage:this.state.currentPage <= 0 ? 0: --this.state.currentPage}, this.updatePagingElements)

    }

    nextBtnHandler=()=>{
        this.setState({prevBtnFlag:false})
        this.setState({currentPage:this.state.currentPage >= this.state.numPages ? this.state.numPages: ++this.state.currentPage}, this.updatePagingElements)

    }
    updatePagingElements = () => {
        if(this.state.currentPage===this.state.numPages -1){
            this.setState({prevBtnFlag:false})
            this.setState({nextBtnFlag:true})

          }
          if(this.state.currentPage===0){
            this.setState({prevBtnFlag:true})
            this.setState({nextBtnFlag:false})

          }

      }
    
    componentDidUpdate(){
        // console.log(this.state.prevCurrentPageSate)
        // console.log(this.state.currentPage)
       
    }
     


    render() {
        return (
            <AppContextC.Provider value={{state:this.state, addFun:this.addPersonListClass, handleFirstNameC:this.handleFirstNameC,
            handleLastNameC:this.handleLastNameC, handleAgeC:this.handleAgeC, editPersonListClass:this.editPersonListClass,
            cancelUpdate:this.cancelUpdate, deletePerson:this.deletePerson, handelFilter:this.handelFilter, handleCurrentPage:this.handleCurrentPage,
            handleNumPages:this.handleNumPages, prevBtnHandler:this.prevBtnHandler, nextBtnHandler:this.nextBtnHandler}}>
                
                {this.props.children} 
            </AppContextC.Provider>
            
        );
    }

}

export default AppContextProvideC;