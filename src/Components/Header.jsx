import React from 'react';
import { Link } from 'react-router-dom';


function Header({ changeAction }) {

    return (

        <div className="header-container">
            
            <div className="header">
                <h1>This is the Header: Welcome to PhotoStock</h1>
            </div>

            <div className="navBar-container">
            <Link to="/architecture" onClick= {() => {changeAction('architecture')}} >
                Architecture
            </Link> 
            </div>

        </div>
    );

}

export default Header;