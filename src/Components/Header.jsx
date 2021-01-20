import React from 'react';
import { Link } from 'react-router-dom';


function Header({ }) {

    return (

        <div className="header-container">
            
            <div className="header">
                <h1>Welcome to PhotoStock</h1>
                <h3>Powered By Creators On Pexels To Provide You With The Best Free Stock Photos. </h3>
            </div>

            <div className="navBar-container">

                <Link to="/Architecture">
                    Architecture
                </Link> 

                <Link to="/Interiors">
                    Interiors
                </Link> 

                <Link to="/Fashion">
                    Fashion
                </Link> 

                <Link to="/Nature">
                    Nature
                </Link> 

                <Link to="/Travel">
                    Travel
                </Link> 

                <Link to="/Drinks">
                    Drinks
                </Link> 

                <Link to="/Food">
                    Food
                </Link> 


            </div>

        </div>
    );

}

export default Header;