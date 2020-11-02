import React, { Component } from 'react'

export default class PaginationC extends Component {
    constructor(props){
        super(props)
        this.state={

            currentPage:0
        }
    }
    render() {
        return (
            <div className="pagination">
            <p>
            <button  value="First" onClick={this.setState({currentPage:0})}  >
            <i class="fa fa-fast-backward"></i>
            </button>
            <button  value="Prev" width="30px" height="10px" ><i class="fa fa-step-backward"></i></button>
            <input type="button" onClick="" />
            <button  value="Next" >
            <i class="fa fa-step-forward"></i>
            </button>
            <button  value="Last"  >
            <i class="fa fa-fast-forward"></i>
            </button>
            </p>
            </div>
        )
    }
}
