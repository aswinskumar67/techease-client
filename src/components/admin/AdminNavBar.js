import { render } from '@testing-library/react';
import React, {Component} from 'react';


import './AdminNavBar.css'


class AdminNavBar extends Component{
    constructor(props){
        super(props);
        this.state={
            activeElement: "manage-users"
        }
    }

render(){
    return(
            <div className="side-nav-bar-container">  
            <div>
                <h2>Techease</h2>
            </div>
                    <div className="admin-sidebar-links">

                    <a id="manage-requests"  className="admin-sidebar-link-text" onClick={this.props.updateActiveComponent}>Manage Requests</a>
                    <a id="manage-contributers" className="admin-sidebar-link-text" onClick={this.props.updateActiveComponent}>Manage Contributers</a>
                    <a id="approved-requests" className="admin-sidebar-link-text" onClick={this.props.updateActiveComponent}>Approved Requests</a>
                    </div>
            </div>
        
    )
}
}

export default AdminNavBar;