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

            <Link to="/interiors" onClick= {() => {changeAction('interiors')}} >
                Interiors
            </Link> 

            <Link to="/Fashion" onClick= {() => {changeAction('fashion')}} >
                Fashion
            </Link> 

            <Link to="/Nature" onClick= {() => {changeAction('nature')}} >
                Nature
            </Link> 

            <Link to="/Travel" onClick= {() => {changeAction('travel')}} >
                Travel
            </Link> 

            <Link to="/Drinks" onClick= {() => {changeAction('drinks')}} >
                Drinks
            </Link> 

            <Link to="/Food" onClick= {() => {changeAction('food')}} >
                Food
            </Link> 


            </div>

        </div>
    );

}

export default Header;