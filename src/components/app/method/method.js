import React, { Component } from 'react'
import './method.css'
export default class Method extends Component {
    constructor(props) {
        super(props)
    }
    handleClick= (e)=>{
       this.props.handleClick(this.props.details._id)
    }
    render() {
        return (
            <div onClick={this.handleClick} className="method-container">
                <p>{this.props.details.methodName}</p>
            </div>
        )
    }
}
