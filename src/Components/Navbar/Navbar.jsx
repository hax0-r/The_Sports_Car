import React, { useRef } from 'react'
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
import NAVBAR_DATA from './NavBAR_DATA'
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";


export default function Navbar() {
    const nav_hide = useRef();

    const show_nav = ()=>{
        nav_hide.current.classList.add("for-mobile")
    }
    const close_nav = ()=>{
        nav_hide.current.classList.remove("for-mobile")
    }


    return (
        <>
            <nav>
                <div className="main">
                    <Link to="/" ><img src={logo} alt="" /></Link>
                    <div className="links" ref={nav_hide}>
                        <ul>
                        <div className="close-bar" onClick={close_nav} ><IoClose /></div>
                            {
                                NAVBAR_DATA.map((val, index) => {
                                    return (
                                        <li key={index}>
                                            <NavLink to={val.navPath} onClick={close_nav}>{val.navTitle}</NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="nav-bar" onClick={show_nav}><FaBarsStaggered /></div>
                </div>
            </nav>
        </>
    )
}
