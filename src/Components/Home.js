import React from 'react';
import {NavLink} from "react-router-dom";
function Home() {
    return (
       <>
        <section className="as_banner_wrapper">
            <div className="container">
                <div className="row as_verticle_center">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="as_banner_slider">
                            <div className="as_banner_detail">
                                <h5>Trust our experience</h5>
                                <h1>Start control of your <br/> professional destiny</h1>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
                                <NavLink to="#" className="as_btn">Appointment</NavLink>
                            </div>
                            <div className="as_banner_detail">
                                <h5>What’s Your Sign ?</h5>
                                <h1>Read Your Daily <br/> Horoscope Today</h1>
                                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididuesdeentiut labore etesde dolore magna aliquapspendisse and the gravida.</p>
                                <NavLink to="#" className="as_btn">Appointment</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="as_banner_img text-center">
                            {/* <img src="assets/images/hand_bg.png" alt="" className="img-responsive as_hand_bg">
                            <img src="assets/images/hand.png" alt="" className="img-responsive as_hand"> */}
                        </div>
                    </div>
                </div>
            </div>
        </section> 
       </>
    )
}

export default Home
