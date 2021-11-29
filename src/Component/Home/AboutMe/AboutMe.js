import React from 'react';
import img from '../../../images/mm2.jpg'

const AboutMe = () => {
    return (
        <div style={{ marginTop: '200px' }} className="container mb-5 text-light shadow p-3">
            <h1 style={{color:'#ff3399'}} className="text-center mb-5 shadow">ABOUT ME_______________</h1>

            <div className="row">
                <div className="col-12 col-lg-6 col-md-6">
                    <img width="400px" height="400px" src={img} alt="" />
                    <h4> Name:  <span style={{color:'#ff3399'}}>Munni Khatun</span> </h4>
                    <p>Profile: MERN Stack Developer</p>
                    <p>Phone:01732261884</p>
                    <p>Email: munnikhatun51544@gmail.com</p>
                </div>
                <div className="col-12 col-lg-6 col-md-6 text-light">
                    <div>
                        <div>
                        <h3>My Name is  <span style={{color:'#ff3399'}}>Munni</span> </h3>
                        <p> I am Student of Computer Technology and  I am Junior Fornt End Developer. Programming is My passion thats why I decided start about learning Programme.     </p>
                        <p>All Ready I have To Done Complete Web Development courses with Programming Hero. Here I learned Html, Css, Javascrip, React js, Authentication, Also Database Realted things like MongoDb , Node js, And Heroku.</p>
                        <p>And Also Learned some Javascript library. I have to done Many Project Successfully.</p>
                        </div>
                        <h1>Skill</h1>
                        __________________________________________________________________________________
                    <h3>HTML</h3>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '90%', backgroundColor:'#ff3399'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                        </div>
                    <h3>Css</h3>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '70%', backgroundColor:'#ff3399'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                        </div>
                    <h3>Javascript</h3>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '50%', backgroundColor:'#ff3399'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                        </div>

        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;