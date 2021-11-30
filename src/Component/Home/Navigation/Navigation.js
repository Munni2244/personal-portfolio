import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="container" >
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="navbar-brand  fw-bold fs-lg" href="#"> <span style={{color:'#ff3399'}}>MuNni</span> </Link>
        </li>
        
      </ul>
      <div className="d-flex">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/home" className="nav-link active" aria-current="page" >Home</Link>
        </li>
        
      </ul>
        <a target="_blank" href="https://drive.google.com/file/d/1zovoy4d-kRuKYFHNMCsseAI-JEJbqezI/view?usp=sharing">
        <button style={{ color:'#ff3399', border:'1px solid white'}} className="btn rounded-pill" type="">DownLoad Resume</button></a>
      </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navigation;