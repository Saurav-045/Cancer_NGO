import React from "react";
import aboutus from "../components/Assets/aboutus.jpg";
import about from "../components/Assets/about.png";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="bg-white">
      <div>
        <div className="image-container d-flex justify-content-center align-items-center m-2 mb-2">
          <img src={about} />
        </div>
        <div className="container bg-white whoweare">
          <h1 className="d-flex justify-content-center align-items-center mt-5 mb-3 text-black font-weight-bolder">
            Who we are?
          </h1>
          <p className="d-flex justify-content-center align-items-center m-3 text-black">
            Cancer is a devastating disease that affects millions of lives
            worldwide. It is a complex condition characterized by the
            uncontrolled growth and spread of abnormal cells in the body. Cancer
            can manifest in various forms and can occur in any part of the body,
            leading to severe health complications and, in some cases, loss of
            life.
            <br />
            In the face of this challenging disease, organizations like Rog Niti
            have emerged to make a significant difference in the lives of cancer
            patients and their families. Rog Niti is a non-governmental
            organization (NGO) dedicated to supporting cancer patients and
            promoting awareness about the disease. Their commitment to improving
            the lives of those affected by cancer is commendable.
            <br />
            <br />
          </p>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="block-wrapper">
              <h1 className="d-flex justify-content-center align-items-center mt-5 mb-3 text-black font-weight-bolder">
                Mission
              </h1>
              <p className="d-flex justify-content-center align-items-center p-5 text-black">
                Rog Niti, an NGO committed to the fight against cancer, has a
                mission that encompasses various important aspects. With a clear
                objective in mind, they strive to make a significant impact on
                the lives of cancer patients and their families. Their mission
                revolves around cancer awareness, patient support, palliative
                care, collaboration, and advocacy. 
                Rog Niti places great emphasis on raising awareness about cancer
                and its various dimensions. Through educational campaigns,
                workshops, and seminars, they disseminate crucial information
                about the disease, its risk factors, and preventive measures. By
                increasing public awareness, Rog Niti aims to empower
                individuals to make informed decisions regarding their health
                and well-being.
              </p>
            </div>
          </div>
          <div className="col-6">
            <div className="block-wrapper">
              <h1 className="d-flex justify-content-center align-items-center mt-5 mb-3 text-black font-weight-bolder">
                Vision
              </h1>
              <p className="d-flex justify-content-center align-items-center p-5 text-black">
                The vision of Rog Niti NGO is to create a society where every
                individual affected by cancer receives comprehensive support,
                care, and empowerment. They strive to promote awareness about
                cancer, facilitate early detection, and ensure access to
                high-quality medical treatment. Rog Niti envisions a future
                where the emotional, psychological, and financial needs of
                cancer patients and their families are met, fostering a sense of
                hope and resilience. Through their dedicated efforts, they aim
                to transform the lives of individuals battling cancer and work
                towards a society that is compassionate, informed, and united in
                the fight against this formidable disease. Hence, we have very clear 
                objectives of what we want to do.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
