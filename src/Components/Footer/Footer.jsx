import React from 'react'
import { Link } from 'react-router-dom'
import NAVBAR_DATA from '../Navbar/NavBAR_DATA'
import logo from '../../assets/logo.png'

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-logo">
                <img src={logo} alt="" />
                </div>
                <div className="content">
                    <div className="left">
                        <h1>Contact</h1>
                        <h2>Keep in touch</h2>
                        <div className="links">
                        <Link>FACEBOOK</Link>
                        <Link>TWITTER</Link>
                        <Link>INSTAGRAM</Link>
                        <Link>YOUTUBE</Link>
                        </div>
                    </div>
                    <div className="right">
                        <h2>Right & content</h2>
                        <Link>VILLE@VALTTERIBOTTAS.COM</Link>
                    </div>
                </div>
                <div className="bottom">
                    <div className="left"><p>Copyright © 2024 Valtteri Bottas</p></div>
                    <div className="right">
                        {
                            NAVBAR_DATA.map((val, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={val.navPath} >{val.navTitle}</Link>
                                    </li>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
