import React from 'react';
import { Navbar, Form } from 'react-bootstrap';
import logo from '../../Logo/social-buddy-logo.png';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserAlt } from '@fortawesome/free-solid-svg-icons'

const NavBar = (props) => {
    return (
        <div className='navigation'>
            <Navbar>
                
                <Navbar.Brand href="#home">
                    <img src={logo} alt="asd" id='logoImg' fluid />
                </Navbar.Brand>
                
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                <h2 id='user-info'><FontAwesomeIcon icon={faUserAlt} /> <a href="#login" style={{color:"white" , padding:'0px'}}>{props.userName}</a></h2>
                </Navbar.Text>
                </Navbar.Collapse>

            </Navbar>
        </div>
    );
};

export default NavBar;