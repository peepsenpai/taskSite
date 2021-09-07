import React from 'react'
import {NavLink} from "react-router-dom";

function Header() {
    return (
      <>
      <section className="as_header_wrapper">
            <div className="as_info_detail">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <ul>
                                <li>
                                    <NavLink to="">
                                        <div className="as_infobox">     
                                        +1800 326 3264
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="">
                                        <div className="as_infobox">
                                        support@website.com
                                        </div>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div className="as_right_info">
                                <div className="as_user">
                                    <NavLink to="index.html" className="as_btn apoint">Appointment</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6">
                        <div className="as_logo">
                            <NavLink to="/">
                                <h2>Samayanandaa</h2>
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-8 col-xs-6">
                        <div className="as_right_info">
                            <div className="as_menu_wrapper">
                               
                                <div className="as_menu">
                                    <ul>
                                        <li><NavLink to="index.html" className="active">home</NavLink></li>
                                        <li><NavLink to="/about">about us</NavLink></li>
                                        <li><NavLink to="/service">Services</NavLink>
                                            <ul className="as_submenu">
                                                <li><NavLink to="#">Natal Horoscope</NavLink></li>
                                                <li><NavLink to="#">Annual Horoscopy</NavLink></li>
                                                <li><NavLink to="#">Matrimonial Horoscope Matching</NavLink></li>
                                                <li><NavLink to="#">Remedies</NavLink></li>
                                                <li><NavLink to="#">Horary</NavLink></li>
                                            </ul>
                                        </li>
                                        <li><NavLink to="/tickets">Tickets</NavLink></li>
                                        <li><NavLink to="/blog">blog</NavLink> </li>
                                        <li><NavLink to="/contact">contact</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
      </>
    )
}

export default Header
