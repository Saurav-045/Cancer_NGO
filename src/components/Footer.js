import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='bg-dark'>
      <div className="container ">
  <footer className="py-5">
    <div className="row">
      <div className="col-8 col-md-3 mb-3">
        <h5 className='text-red'>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
          <li className="nav-item mb-2"><Link to="/browse" className="nav-link p-0 text-muted">Browse</Link></li>
          <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-muted">About</Link></li>
          <li className="nav-item mb-2"><Link to="/login" className="nav-link p-0 text-muted">Login</Link></li>
          <li className="nav-item mb-2"><Link to="/createuser" className="nav-link p-0 text-muted">Signup</Link></li>
        </ul>
      </div>

      <div className="col-8 col-md-3 mb-3">
        <h5 className='text-red'>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Home</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Features</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Pricing</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">FAQs</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">About</Link></li>
        </ul>
      </div>

      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5 className='text-red'>Subscribe to our newsletter</h5>
          <p className='text-red'>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top bg-red text-red">
      <p>© 2022 Company, Inc. All rights reserved.</p>
    </div>
  </footer>
</div>
    </div>
  );
}
