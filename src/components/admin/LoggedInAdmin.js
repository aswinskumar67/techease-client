import React, {Component} from 'react';
import './LoggedInAdmin.css'
import AdminNavBar from './AdminNavBar';
import ApprovedRequests from './ApprovedRequests'
import ManageContributers from './ManageContributer'
import ManageRequests from './ManageRequests'

class LoggedInAdmin extends Component{
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
            {this.state.activeComponent==="manage-requests" && <ManageRequests/>}
            {this.state.activeComponent==="manage-contributers" && <ManageContributers />}
            {this.state.activeComponent==="approved-requests" && <ApprovedRequests />} 
            </div>

            
      
        </div>
    )
    }
}
export default LoggedInAdmin;