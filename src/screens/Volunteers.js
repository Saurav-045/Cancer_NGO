  import React, {useState} from 'react';
  import image from "../components/Assets/volunteer.png";

  export default function Volunteers() {
      const [credentials, setcredentials] = useState({name:"", email:"", phone:"", person:""});


      const handleSubmit =async(e)=>{
          e.preventDefault();
          console.log(JSON.stringify({name:credentials.name, email:credentials.email, phone:credentials.password, person:credentials.person}))
          const response = await fetch("http://localhost:5000/api/createvolunteer",{
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body:JSON.stringify({name:credentials.name, email:credentials.email, phone:credentials.phone, person:credentials.person})
          });
          const json = await response.json()
          console.log(json);
      }

      const onChange = (event) => {
          setcredentials({...credentials, [event.target.name]:event.target.value})
      }



  return (
    <div className='container-fluid'>
      <section className="text-white" >
  <div className="container h-80 bg-white">
    <div className="row vol d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-10 vol col-xl-11">
        <div className="card text-black volunteer" style={{borderRadius: "0px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Become a volunteer</p>

                <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" name='name' value={credentials.name} onChange={onChange} />
                      <label className="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control" name="email" value={credentials.email} onChange={onChange} />
                      <label className="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example4c" className="form-control" name="phone" value={credentials.phone} onChange={onChange}/>
                      <label className="form-label" for="form3Example4c">Phone No</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example4cd" className="form-control" name="person" value={credentials.person} onChange={onChange} placeholder='E.g Doctor/Patient/Helper' />
                      <label className="form-label" for="form3Example4cd">What You are?</label>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 btn-style-two theme-btn">
                    <button type="submit" className="btn btn-style-two theme-btn">Register</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex order-1 order-lg-2 d-flex justify-content-center align-items-center">

                <img src={image}
                  className="img-fluid" style={{borderRadius: "30%", maxHeight:"80vh", minWidth:"50vh", marginLeft:"20%"}} alt="Sample image" />

              </div>
            </div>
          </div>
          <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
    <div class="text-white mb-3 mb-md-0 bottom-fixed">
      Copyright © 2020. All rights reserved.
    </div>
  </div>
        </div>
      </div>
      
    </div>
    
  </div>
  
</section>


    </div>
  );

}
