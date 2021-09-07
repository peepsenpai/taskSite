import React from 'react';
import {NavLink} from "react-router-dom";

function About() {
    return (
      <>
    <section className="as_about_wrapper as_padderTop30 as_padderBottom60">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 text-center">
                        <h1 className="as_heading">About Us</h1>

                        <p className="as_font14 as_padderTop20 as_padderBottom30">This the system of finding and fixing Auspicious Time for performing various important activities</p>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="as_aboutimg text-right">
                        </div> 
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="as_about_detail">
                            <h1 className="as_heading">What Do We Do ?</h1>
                            <div className="as_paragraph_wrapper">
                                <p className="as_margin0 as_font14 as_padderBottom10">Samayanandaa.org was started to cater to the needs of various people coming from various segments of the society with an intention to give the BEST ASTROLOGICAL GUIDANCE ... keeping the present trend of the society having various needs of guidance in the areas of Knowing the Longevity, Health, Profession, Matrimonial Matters, Financial issues, Business, Legal matters concerning various issues, Some major Hurdles in life in reaching the goals etc...</p>
                                <p className="as_font14">Being some among various others personal issues... It is the place where as one-stop</p>
                            </div>

                            <div className="as_contact_expert">
                                <span className="as_icon">
                                   
                                </span>
                                <span className="as_year_ex">
                                    10
                                </span>
                                <div>
                                    <h5>years of</h5>
                                    <h1>Experience</h1>
                                </div>
                            </div>
                            <NavLink to="#" className="as_btn">read more</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      </>
    )
}

export default About
