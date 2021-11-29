import React from 'react';
import img1 from '../../../images/mm1.jpg'
import Typical from 'react-typical'


const Banner = () => {
    return (
        <div className="container mt-5 text-light"  >
            <div className="row">
                <div style={{height:'100%', marginTop:'100px'}} className="col-12 col-lg-6 col-md-6  ">
                 
                   <h1 style={{color:'#ff3399', fontFamily:'monospace'}}>
                  <h1 className="text-light"> Hey, I Am </h1>
                    
                   <Typical 
                    loop={Infinity}
                        steps={['Munni', 1000,
                         ' Forn End Developer!', 1000,
                         'Junior Web Developer!', 1000,
                         'MERN Stack Developer', 1000,
                        
                        ]}
                        
                        // wrapper="p"
                    />
                   </h1>
                   <p>Knack Of Building Applications With Fornt End And BaCkEnd  Operations </p>
                   <button  style={{ color:'white',border:'1px solid white'}} className="btn  rounded-pill" >{" "} Hire Me {" "}</button>
                </div>
                <div className="col-12 col-lg-6 col-md-6 mt-4">
                    <img style={{ borderRadius: '100%', border: '8px solid #99004d' }} src={img1} alt="Girl in a hejab" width="500" height="450"></img>
                </div>
            </div>
        </div>
    );
};

export default Banner;