import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css'
import img1 from '../../../images/lipstic.png';
import img2 from '../../../images/s3.png';
import img3 from '../../../images/s2.png';
import img4 from '../../../images/el.png';

const Projects = () => {
    return (
        <div style={{marginTop:'100px'}} className="container">
            <h1 style={{color:'#ff3399'}} className="text-center">My Projects_______</h1>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-6  ">

                    <div className="survice">
                        <img width="400px" height="400px" src={img1} alt="" />
                        <h1 className="mt-4"> Green Shadow</h1>
                        <Link> <button className="btn  btn-secondary mb-2">See Details</button></Link>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6  ">

                    <div className="survice">
                        <img width="400px" height="400px" src={img2} alt="" />
                        <h1 className="mt-4"> Travel Trailer</h1>
                        <Link> <button className="btn  btn-secondary mb-2">See Details</button></Link>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6  ">

                    <div className="survice">
                        <img width="400px" height="400px" src={img3} alt="" />
                        <h1 className="mt-4">United Health Care</h1>
                        <Link> <button className="btn  btn-secondary mb-2">See Details</button></Link>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6  ">

                    <div className="survice">
                        <img width="400px" height="400px" src={img4} alt="" />
                        <h1 className="mt-4"> E-Learning</h1>
                        <Link> <button className="btn  btn-secondary mb-2">See Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;