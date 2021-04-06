import React, { Component } from 'react'
import './card.css'
import Icon from '../../../assets/images/icon.svg'
export default class card extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log(this.props)
    }
    handleClick = () => {
        if(this.props.type=="home"){
        this.props.history.push(`/${this.props.details._id}`)
    }
    }
    render() {
        return (
            <div className="card-wrapper" onClick={this.handleClick}>
                <img src={`/${this.props.details.applicationIcon}`} alt="icon"/>
                <h3>{this.props.details.applicationName}</h3>
            </div>
        )
    }
}
