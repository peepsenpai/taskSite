import React from 'react';
import { NavLink } from "react-router-dom";
import web from "./img/hand.png"
function Home() {
    return (
        <>
            <section className="as_banner_wrapper">
                <div className="container">
                    <div className="row as_verticle_center">
                        <div className="col-lg-6 col-md-12 col-sm-12 left-side">
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="as_banner_detail">
                                            <h5>What’s Your Sign ?</h5>
                                            <h1>Read Your Daily <br /> Horoscope Today</h1>
                                            <p> labore etesde dolore magna aliquapspendisse and the gravida.</p>
                                            <NavLink to="#" className="as_btn btn-warning">Appointment</NavLink>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="as_banner_detail">
                                            <h5>Trust our experience</h5>
                                            <h1>Start control of your <br /> professional destiny</h1>
                                            <p>Lorem ipsum dolor sit layout. The point of using Lorem Ipsum.</p>
                                            <NavLink to="#" className="as_btn btn-warning">Appointment</NavLink>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon"><i className="fas fa-arrow-left"></i></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon"><i className="fas fa-arrow-right"></i></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="as_banner_img text-center">

                            <img src={web} alt="" className="img-responsive as_hand img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
