import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function Navbar() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };
  const navigate = useNavigate();
  const handleLogout = () =>{
    localStorage.removeItem("authToken");
    navigate("/login"); /// /login should be there;
  }

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Link className="navbar-brand text-white fs-1 fst-italic" to="/"><b>NGO</b></Link>
        <button
          className="navbar-toggler white-button navbarbtn"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav d-flex me-auto mx-2">
            <li className="nav-item">
              <Link className="nav-link text-black active fs-5" aria-current="page" to="/" onClick={handleNavCollapse}>Home</Link>
            </li>
            <li className='nav-item'>
              <Link className="nav-link text-black active fs-5" aria-current="page" to="/browse" onClick={handleNavCollapse}>Browse</Link>
            </li> 
            <li className='nav-item'>
              <Link className="nav-link text-black active fs-5" aria-current="page" to="/about" onClick={handleNavCollapse}>About</Link>
            </li> 
          </ul>
        </div>
      </div>
    </nav>

  );
}
