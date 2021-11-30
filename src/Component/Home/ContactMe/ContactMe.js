import React from 'react';
import './ContactMe.css'

import user from '../../../images/user.jpg'

const ContactMe = () => {


    return (
       <div style={{marginTop:'100px'}}>
            <div className="contact row  mt-5">
            <div className=" col-12 col-lg-6 col-md-6 " >
                <div className=" text-center m-5">
                    <h1 style={{color:'#ff3399'}} className="">Contact With Me <i class="fas fa-phone-square"></i></h1>

                   <form action="https://formsubmit.co/munnikhatun51544@gmail.com" method="POST">

                   <input placeholder="Enter Your Name" className="my-4 bg-dark border-light rounded-pill" style={{padding:'5px', width:'90%',}} type="text" name="name" id=""  required/> <br />

                   <input placeholder="Enter Your Email" className="my-4 bg-dark border-light rounded-pill" style={{padding:'5px', width:'90%',}} type="email" name="email" id=""  required/> <br />

                   <textarea  className="my-3 bg-dark text-light border-light rounded-pill " placeholder="........Enter Your Message" style={{ width:'92%',}} name="message" id="" cols="50" rows="5" required></textarea> <br />
                   
                   <button style={{ color:'#ff3399', width:'50%', border:'1px solid white'}} className="btn rounded-pill " type="submit"> Submit</button>
                   </form>
                </div>
            </div>
            <div style={{marginTop:'70px'}} className="col-12 col-lg-6 col-md-6 text-center ">
                <img width="200px" height="200px" className="rounded-circle" src={user} alt="" />
                <h4>You Will Give Me Any Messages. Please Let me Know</h4>
                <h5>You Write To Full free Here. And Send Me now what do you say.</h5>
            <h5>
                  I will Recieve Your Messages And Give You Feedback 
            </h5>
            </div>
        </div>
       </div>
    );
};

export default ContactMe;