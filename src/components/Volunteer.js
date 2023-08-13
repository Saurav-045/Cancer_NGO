import React from 'react';
import { Link } from 'react-router-dom';


export default function Volunteer() {
  return (
    <div>
      <section className="call-to-action">
    	<div className="auto-container">
            <div className="sec-title centered">
            	<h2>ARE YOU READY TO VOLUNTEER?</h2>
                <div className="separator"></div>
                <div className="desc-text p-2 mb-3">United community contribution is what makes CPAA what it is today! At CPAA, we combine hard work and fun to achieve our goals by affiliating with individual members of society, fellow organizations/NGOs, community social workers, students, activists and corporate officials to achieve our goals and work in unity towards our cause. Let us know how you would like to get involved. Review our website and contact any of our offices if you are interested. To investigate other opportunities in CPAA, please click below complete the form below and submit it and we’ll be in touch shortly.</div>
            </div>
            
            <div className="links"><Link to="/volunteer" className="theme-btn btn-style-two m-3">BECOME A VOLUNTEER</Link> <Link to="/donate" className="theme-btn btn-style-one m-3">MAKE DONATION</Link></div>
        </div>
    </section>
    </div>
  );
}
