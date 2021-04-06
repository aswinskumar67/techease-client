import React, { Component } from 'react'
import './singleApp.css'
import Sidebar from './Sidebar/Sidebar'
import Burger from '../../assets/images/burger.svg'
import Card from '../home/card/card'
import Method from './method/method'
import SingleMethod from './method/singleMethod'
import axios from 'axios'
import Back from '../../assets/images/left-arrow.svg'
export default class AppComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { selectedMethod: "", loading: true, application: "" }
    }
    handleClick = (methodId) => {
        this.setState({ selectedMethod: methodId })
    }
    componentDidMount() {
        axios.get(`/application/${this.props.match.params.appId}`).then(res => {
            this.setState({ application: res.data.application, methods: res.data.methods })
        })
    }

    render() {
        return (
            <div className="application-wrapper">
                <Sidebar />
                <div className="application-main">
                    <div className="header">
                        <div>
                            <img src={Burger} alt="burger" />
                            <h2>{this.state.application.applicationName}</h2>
                            <p>{this.state.application.applicationDescription}</p>
                        </div>
                        <div className="header-button">
                            {this.state.selectedMethod && <img onClick={(e)=>this.setState({selectedMethod:""})}src={Back} alt="back" width="50" height="50"/>}
                            {this.state.selectedMethod==="" && <img onClick={(e)=>this.props.history.push("/")}src={Back} alt="back" width="50" height="50"/>}
                        </div>
                       
                    </div>

                    <div className="content">
                        <div className="application-icon">
                            <Card details={this.state.application} />
                        </div>
                        {this.state.selectedMethod === "" ?
                            <div className="method-wrapper">
                                {Array.isArray(this.state.methods) && this.state.methods.map((method => {
                                    return (<Method details={method} {...this.props} handleClick={this.handleClick} />)
                                }))}

                            </div> :
                            <div><SingleMethod selectedMethod={this.state.selectedMethod} /></div>}
                    </div>

                </div>
            </div>
        )
    }
}
