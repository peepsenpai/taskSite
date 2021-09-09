import React from 'react';
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <>
            <section className="as_footer_wrapper as_padderTop80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="as_footer_inner as_padderTop10 as_padderBottom40">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <div className="as_footer_widget">
                                            <div className="as_footer_logo">
                                                <NavLink to="index.html">

                                                    <h1>Samayanandaa</h1>
                                                </NavLink>
                                            </div>
                                            <p>There are many variations of this passages of Lorem Ipsum.</p>

                                            <ul className="as_contact_list">
                                                <li>

                                                    <p>ABC Road 204001, India</p>
                                                </li>
                                                <li>

                                                    <p>
                                                        <NavLink to="#">+ (91) 1800-124-100</NavLink>
                                                    </p>
                                                </li>
                                                <li>

                                                    <p>
                                                        <NavLink to="#">demo@example.com</NavLink>
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <div className="as_footer_widget">
                                            <h3 className="as_footer_heading">Quick Links</h3>

                                            <ul>
                                                <li><NavLink to="#"> About Us</NavLink></li>
                                                <li><NavLink to="#"> Blog</NavLink></li>
                                                <li><NavLink to="#"> Astrologers</NavLink></li>
                                                <li><NavLink to="#"> Appointment</NavLink></li>
                                                <li><NavLink to="#"> Contact Us</NavLink></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <div className="as_footer_widget">
                                            <h3 className="as_footer_heading">Horoscope Forecasts</h3>

                                            <ul>
                                                <li><NavLink to="#"> My Daily Horoscope</NavLink></li>
                                                <li><NavLink to="#"> My Weekly Horoscope</NavLink></li>
                                                <li><NavLink to="#"> My Monthly Horoscope</NavLink></li>
                                                <li><NavLink to="#"> My Love Horoscope</NavLink></li>
                                                <li><NavLink to="#"> My Career Horoscop</NavLink></li>
                                            </ul>
                                        </div>
                                    </div>


                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <div className="as_footer_widget">
                                            <h3 className="as_footer_heading">Our Newsletter</h3>

                                            <p>Lorem ipsum dolor amet, consectetur adipiscing elit,sed eiusmod tempor. </p>

                                            <div className="as_newsletter_wrapper">
                                                <div className="as_newsletter_box">
                                                    <input type="text" name="" id="" className="form-control" placeholder="Email..." />
                                                    <i className="fas fa-paper-plane"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="as_copyright_wrapper text-center">
                                <p>Copyright &copy; 2021 Samayanandaa. All Right Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer