import React, { Component } from 'react'

export default class stepItem extends Component {
    constructor(props) {
        super(props)
    }
    handleClick = () =>{
        this.props.updateActiveStep(this.props.step.stepNumber-1)
    }
    render() {
        const activeClass = this.props.activeStep+1 === this.props.step.stepNumber ? "steplist-item active":"steplist-item"
        return (
            <div>
                <div className={activeClass} onClick={this.handleClick}>
                    <h3>{this.props.step.stepDescription}</h3>
                </div>
            </div>
        )
    }
}
