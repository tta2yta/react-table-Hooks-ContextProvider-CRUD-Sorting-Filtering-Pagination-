import React, { Component } from 'react'

export default class PaginationC extends Component {
    render() {
        return (
            <div className="pagination">
            <p>
            <button  value="First"  >
            <i class="fa fa-fast-backward"></i>
            </button>
            <button  value="Prev" width="30px" height="10px" ><i class="fa fa-step-backward"></i></button>
            <input type="button" onClick="" />
            <button  value="Next" >
            <i class="fa fa-step-forward"></i>
            </button>
            </p>
            </div>
        )
    }
}
