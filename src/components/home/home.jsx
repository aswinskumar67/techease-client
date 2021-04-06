import React, { Component } from 'react'
import './home.css'
import Logo from '../../assets/images/logo.svg'
import Card from './card/card.jsx'
import axios from 'axios'
export default class home extends Component {
    constructor(props){
        super(props)
        this.state={applications:""}
    }
    componentDidMount(){
        axios.get("/home").then(res=>{
            this.setState({applications:res.data})
        })
    }
    render() {
        return (
            <div className="home-page-wrapper">
                <div className="home-header">
                    <div>
                    <nav className="home-nav">
                        <img src={Logo} alt="logo"></img>
                    </nav>
                    <nav className="description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla convallis tempor.
                             </p>
                    </nav>
                    </div>
                    <div className="nav-button">
                        <button onClick={()=>this.props.history.push("/contributor")}>Contributor</button>
                    </div>
                </div>
                {Array.isArray(this.state.applications) && <div className="home-body">
                    {this.state.applications.map( application=>
                    <Card type="home" {...this.props} details={application}/>
                    )}                             
          </div> }
                
            </div>
        )
    }
}
