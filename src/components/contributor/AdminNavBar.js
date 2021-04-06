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

                    <a id="add-app"  className="admin-sidebar-link-text" onClick={this.props.updateActiveComponent}>Add Application</a>
                    <a id="unassigned-methods" className="admin-sidebar-link-text" onClick={this.props.updateActiveComponent}>Unassigned Methods</a>
                    <a id="approved-methods" className="admin-sidebar-link-text" onClick={this.props.updateActiveComponent}>Approved Methods</a>
                    </div>
            </div>
        
    )
}
}

export default AdminNavBar;