import React from 'react'
import {NavLink} from "react-router-dom";

function Tickets() {
    return (
   <>
    <section className="as_pricing_plan as_padderBottom20 as_padderTop80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h1 className="as_heading as_heading_center">Our Pricing Plan</h1>
                        
                        <p className="as_font14 as_padderBottom50 as_padderTop20">Consectetur adipiscing elit, sed do eiusmod tempor incididuesdeentiut labore <br/>etesde dolore magna aliquapspendisse and the gravida.</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="as_pricing_box text-center">
                            <div className="as_pric_icon">
                               
                            </div>
                            <div className="as_pricing as_gradient_text">
                                <sup className="as_gradient_text">$</sup>10 <sub className="as_gradient_text">/ Per Day</sub>
                            </div>
                            <h1 className="as_heading as_gradient_text">Standard Plan</h1>
                            <ul>
                                  <li>Ask One Question</li>
                                  <li>Half-Hour Reading</li>  
                                  <li className="as_inactive"> Newborn / Child <br/> Reading</li> 
                                  <li className="as_inactive">Relationship Reading</li>
                            </ul>

                            <NavLink to="#" className="as_btn">Choose Now</NavLink>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="as_pricing_box text-center">
                            <div className="as_pric_icon">
                                
                            </div>
                            <div className="as_pricing as_gradient_text">
                                <sup className="as_gradient_text">$</sup>45 <sub className="as_gradient_text">/ Per Day</sub>
                            </div>
                            <h1 className="as_heading as_gradient_text">Pro Plan</h1>
                            <ul>
                                  <li>Ask One Question</li>
                                  <li>Half-Hour Reading</li>  
                                  <li className="as_inactive"> Newborn / Child <br/> Reading</li> 
                                  <li className="as_inactive">Relationship Reading</li>
                            </ul>

                            <NavLink to="#" className="as_btn">Choose Now</NavLink>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="as_pricing_box text-center">
                            <div className="as_pric_icon">
                               
                            </div>
                            <div className="as_pricing as_gradient_text">
                                <sup className="as_gradient_text">$</sup>80 <sub className="as_gradient_text">/ Per Day</sub>
                            </div>
                            <h1 className="as_heading as_gradient_text">Premium Plan</h1>
                            <ul>
                                  <li>Ask One Question</li>
                                  <li>Half-Hour Reading</li>  
                                  <li> Newborn / Child <br/> Reading</li> 
                                  <li>Relationship Reading</li>
                            </ul>

                            <NavLink to="#" className="as_btn">Choose Now</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
   </>
    )
}

export default Tickets
