import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "./home.css"
import first from "../components/Assets/1st.webp"
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Gallery from '../components/Gallery';
import Volunteer from '../components/Volunteer';

export default function Home() {

  return (
    <div>
      <Navbar />  
      <header className="masthead">
              <div className="container px-4 px-lg-5 h-100">
                  <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                      <div className="col-lg-8 align-self-end">
                          <h1 className="text-black font-weight-bold">Close the Care Gap</h1>
                          <hr className="divider" />
                      </div>
                      <div className="col-lg-8 align-self-baseline">
                          <h7 className="text-black font-weight-bold mb-5">"Cancer is just part of life, Never let it be your whole life" <br /> Let's stay united and fight against this. You are never alone. <br /></h7>
                          <h2 className='text-black font-weight-bold m-5'>Connect to us!!</h2>
                          <Link className="btn bg-success connect-btn text-black btn-xl btn-lg" to="/">Connect</Link>
                      </div>
                  </div>
              </div>
        </header>
        <Carousel/>
        <Gallery />
        <Volunteer />

      <Footer />
    </div>
  );
}
