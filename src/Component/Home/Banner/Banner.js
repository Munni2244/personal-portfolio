import React, { useEffect } from 'react';
import img1 from '../../../images/hh7.jpg'
import Typical from 'react-typical';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


const Banner = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="container mt-5 text-light"  >
            <div className="row">
                <div style={{height:'100%', marginTop:'100px'}} className="col-12 col-lg-6 col-md-6  ">
                    
               
                   <h1 style={{color:'#ff3399', fontFamily:'monospace'}}>
                      
                  <h1 className="text-light"> Hey, I Am </h1>
                    
                   <Typical 
                    loop={Infinity}
                        steps={['Munni', 1000,
                         ' Fornt End Developer!', 1000,
                         'Junior Web Developer!', 1000,
                         'MERN Stack Developer', 1000,
                        
                        ]}
                        
                        // wrapper="p"
                    />
                   </h1>
                   <p>Knock Of Building Applications With Fornt End And BaCkEnd  Operations </p>
                   <button  style={{ color:'white',border:'1px solid white'}} className="btn  rounded-pill" >{" "} Hire Me {" "}</button>
                   <h4 className="mt-3">
                        <a href="https://www.facebook.com/profile.php?id=100033327230415" target="_blank" className="text-primary m-2" rel="noreferrer">  <i class="fab fa-facebook"></i></a>
                        <a className="text-warning m-2" href="#" rel="noreferrer">    <i class="fab fa-instagram"></i></a>
                        <a className="text-info m-2" href="#" rel="noreferrer">  <i class="fab fa-twitter"></i></a>
                
              
                    </h4>
                </div>
                <div data-aos="zoom-in" className="col-12 col-lg-6 col-md-6 mt-4 img-fluid">
                    <img style={{ borderRadius: '100%', border: '8px solid #99004d' }} src={img1} alt="Girl in a hejab" width="430" height="450"></img>
                </div>
            </div>
        </div>
    );
};

export default Banner;