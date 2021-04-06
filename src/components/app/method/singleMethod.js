import React, { Component } from 'react'
import './singleMethod.css'
import Step from './step'
import StepList from './stepList'
import axios from 'axios'
export default class SingleMethod extends Component {
    constructor(props) {
        super(props)
        this.state = { activeStep: 0 ,steps:"",count:""}
    }
    componentDidMount() {
        axios.get(`/application/method/${this.props.selectedMethod}`).then((response) => {
            this.setState({steps:response.data.steps,count:response.data.count})
        })
    }

    updateActiveStep = (stepNumber) =>{
        this.setState({activeStep:stepNumber})
    }

    next = () => {
        this.setState({activeStep:this.state.activeStep + 1})
    }

    previous = () =>{
        this.setState({activeStep:this.state.activeStep-1})
    }

    render() {
        return (
            <div className="single-method">
                <div className="container">
                {Array.isArray(this.state.steps) &&  this.state.count>0 && <Step activeStep={this.state.activeStep} steps={this.state.steps}/>}
                    <div className="navigate">
                        {this.state.count-1>this.state.activeStep? <button onClick={this.next}>Next</button>:<></>}
                        {this.state.activeStep!=0 && <button onClick={this.previous}>Previous</button>}
                    </div>
                </div>
                {Array.isArray(this.state.steps) && this.state.count>0  &&  <StepList updateActiveStep={this.updateActiveStep} activeStep={this.state.activeStep} steps={this.state.steps}/> }
                   
            </div>
        )
    }
}
