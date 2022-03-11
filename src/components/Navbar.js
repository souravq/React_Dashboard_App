import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { Sidebar } from './Sidebar';
import './Navbar.css';
import logo1 from '../promax_logo.svg';

function Navbar() {
    const [sidebar1,setSidebar]=useState(true);

    const showSidebar=()=>setSidebar(!sidebar1);

  return (
    <>
        <div className='navbar'>
           <Link to='#' className='menu'>
           <FaBars onClick={showSidebar}/>
           </Link>
           {/* <h1 style={{marginLeft: "200px"}}>Promax Legal</h1> */}
          {/* <img src={logo1} style={{resizeMode: 'contain'}} alt="My logo" /> */}
        </div>
        <nav className={sidebar1?'nav-menu active':'nav-menu'}>
            <ul className='nav-menu-items' >
                <li className='navbar-toggle' onClick={showSidebar}>
                    <Link to='#' className='menu'>
                        <AiOutlineCloseSquare />
                        
                    </Link>

                </li>
                {Sidebar.map((item,index)=>{
                    return(
                        <li key={index} className={item.cName}>
                    <Link to={item.path} >
                        {item.icon}
                        <span>{item.title}</span>
                    </Link>

                </li>
                    );
                })}
                <div className="ContactContainer">
                  <span>Having troubles ?</span>
                  <Link to='/contact' className="contactdata">
                        <IoIcons.IoMdHelpCircle />
                        <span>Contact Us!</span>
                        
                    </Link>
                </div>
            </ul>

        </nav>
    </>
  )
}

export default Navbar