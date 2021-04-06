import React, { Component } from 'react'
import './stepList.css'
import StepItem from './stepItem'
export default class StepList extends Component {
    render() {
        return (
            <div className="steplist-container">
                {this.props.steps.map(step => 
                    <StepItem updateActiveStep={this.props.updateActiveStep} step={step} activeStep={this.props.activeStep}/>)}
            </div>
        )
    }
}
