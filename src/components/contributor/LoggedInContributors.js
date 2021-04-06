import React, {Component} from 'react';
import './LoggedInContributors.css'
import AdminNavBar from './AdminNavBar';
import AddApplication from './AddApplications'
import UnassignedMethods from './UnassignedMethods'
import ApprovedMethods from './ApprovedMethods'

class LoggedInContributors extends Component{
    constructor(props){
        super(props);
            this.state = { activeComponent: "manage-requests" };
        }
         updateActiveComponent=(event)=>{
            console.log(event.target.id)
            this.setState({activeComponent:event.target.id})
        }

render(){
    
    return(      
        <div className="logged-in-admin-wrapper">  
            <div>
            <AdminNavBar updateActiveComponent={this.updateActiveComponent}/>
            </div> 
            <div>
            {this.state.activeComponent==="add-app" && <AddApplication {...this.props}/>}
            {this.state.activeComponent==="unassigned-methods" && <UnassignedMethods/>}
            {this.state.activeComponent==="approved-methods" && <ApprovedMethods />} 
            </div>

            
      
        </div>
    )
    }
}
export default LoggedInContributors;