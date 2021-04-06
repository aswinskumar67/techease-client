import React, { Component } from 'react'
import './step.css'
import StepImage from '../../../assets/images/Step.png'
export default class Step extends Component {
    render() {
        return (
            <div className="step-container">
                <p className="number">
                    {this.props.steps[this.props.activeStep].stepNumber}
                </p>
                <div>
                    <img src={`/${this.props.steps[this.props.activeStep].imageLink}`} alt="" />
                    <div className="step-details">
                        <h3>{this.props.steps[this.props.activeStep].stepDescription}</h3>
                        <p>{this.props.steps[this.props.activeStep].stepDetails}</p>
                    </div>
                </div>

            </div>
        )
    }
}
