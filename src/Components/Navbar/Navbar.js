import React from 'react';
// import Sidebar from './Sidebar/Sidebar';
import logoimg from '../../Assets/images/logo.png';
import './Navbar.css';
const  navbar=(props)=>(
    
            <div>
            <nav className='container-fluid nvg'>
            <div className='row'>
            <div className='col-xs-5 col-md-1'><button onClick={props.sideBarToggle}><i className="icon ion-md-menu"/> </button></div>
            <div className='col-xs-5 col-md-2'>
                <img src={logoimg} alt='Bomex'/></div>
            <div className='col-md-7 col-md-offset-2 DesktopOnly'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Page</li>
                    <li>News</li>
                    <li>Contact</li>
                </ul>
                </div>
                </div>
            </nav> 
            </div>
)
export default navbar;