import React, {Component} from 'react';
import axios from 'axios';


class ApprovedMethods extends Component{
    constructor(props) {
        super(props);
        this.state={
            unAssignedMethods:[]
        };
    }
    // componentDidMount=()=> {
    //     axios({
    //         url:"/methods/unassigned",
    //         method:"get",

    //     })
    //     .then(res=> {
            
    //       this.setState({ unAssignedMethods: res.data })
         
    //     }).catch(err=>{
    //         console.error(err);
    //     }
    //     )
    // }
    

    render(){
        return(
            <div className="manage-request-container">
               <div className="manage-request-heading">
                   approved Methods
               </div>
               <div className="manage-request-body">
                   method 
                       
               </div>
            </div>
        )
    }
} export default ApprovedMethods;