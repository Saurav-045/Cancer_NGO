import '../../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import img1 from "../components/Assets/carousel1.jpg"
import img2 from "./Assets/carousel2.jpg";
import img3 from "./Assets/carousel3.jpg";
import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from 'react-responsive-carousel';



export default function CustomCarousel() {
    return (
        <Carousel autoPlay infiniteLoop showThumbs={false} interval={3000} className="custom-carousel">
            <div>
                <img src={img1} alt="Image 1" className="custom-carousel-image" />
                <h5>“10 million people dies everyone due to lack of treatment facilities and lack of monentary help due to cancer.”</h5>
                <h3>Hemant Krishnan</h3>
                <h6>Industry Expert</h6>
            </div>
            <div>
                <img src={img2} alt="Image 2" className="custom-carousel-image" />
                <h5>“40% of the cancer death can be prevented as it is curable.”</h5>
                <h3>Samarendra Singh</h3>
                <h6>Industry Expert</h6>
            </div>
            <div>
                <img src={img3} alt="Image 3" className="custom-carousel-image" />
                <h5>“The total economic cost of the cancer treatment in a year is US$1.16 trilion.”</h5>
                <h3>Arya Aligakar</h3>
                <h6>Student, CIBOP Program, Pune.</h6>
            </div>
        </Carousel>
    );
}
