import React, { Component } from 'react'

export default class PaginationC extends Component {
    constructor(props){
        super(props)
        this.state={

            currentPage:0
        }
    }

    componentDidUpdate(){

    }
    render() {
        const personState=this.props.personlist;
        return (
            <div className="pagination">
            <p>
            <button  value="First" onClick={()=>personState.handleCurrentPage(0)} disabled={personState.state.prevBtnFlag? true:false}  >
            <i class="fa fa-fast-backward"></i>
            </button>
            <button  value="Prev" width="30px" height="10px" onClick={()=>personState.prevBtnHandler()} disabled={personState.state.prevBtnFlag? true:false}  ><i class="fa fa-step-backward" ></i></button>
            <input type="button" onClick="" value={`Current Page : ${personState.state.currentPage + 1}`} />
            <button  value="Next" onClick={()=>personState.nextBtnHandler()} disabled={personState.state.nextBtnFlag? true:false} >
            <i class="fa fa-step-forward"></i>
            </button>
            <button  value="Last" onClick={()=>personState.handleCurrentPage(personState.state.numPages -1)} disabled={personState.state.nextBtnFlag? true:false} >
            <i class="fa fa-fast-forward"></i>
            </button>
            </p>
            </div>
        )
    }
}
