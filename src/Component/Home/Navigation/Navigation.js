import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="container" >
            <nav style={{  fontFamily:'monospace'}} className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link style={{ fontSize:'30px', fontStyle:'italic'}} to="/" className="navbar-brand ms-5  fw-bold fs-lg" href="#"> <span style={{color:'#ff3399'}}> Mu</span>Nni </Link>
        </li>
        
      </ul>
      <div className="d-flex">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/home" className="nav-link active fw-bold" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link active  fw-bold" aria-current="page" >Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link active  fw-bold" aria-current="page" >About</Link>
        </li>
        <li className="nav-item">
          <Link to="/blog" className="nav-link active fw-bold" aria-current="page" >MyBlog</Link>
        </li>
        
      </ul>
        <a rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/1zovoy4d-kRuKYFHNMCsseAI-JEJbqezI/view?usp=sharing">
        <button style={{ color:'#ff3399', border:'1px solid white'}} className="btn rounded-pill" type="">DownLoad Resume</button></a>
      </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navigation;