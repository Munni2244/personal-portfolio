import React from 'react';
import './ContactMe.css'
import emailjs from 'emailjs-com';

import user from '../../../images/user.jpg'

const ContactMe = () => {

    const SendEmail=(e)=>{
        e.preventDefault();

        emailjs.sendForm('service_coqvc8i', 'template_m2o7dah', e.target, 'YOUR_USER_ID')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

    }

    return (
       <div style={{marginTop:'100px'}}>
            <div className="contact row  mt-5">
            <div className=" col-12 col-lg-6 col-md-6 mt-5" >
                <div className=" text-center m-5">
                    <h1 style={{color:'#ff3399'}} className="">Contact With Me</h1>
                   <form onSubmit={SendEmail} action="">
                   <input placeholder="Your Email" className="my-4 bg-dark border-light rounded-pill" style={{padding:'5px', width:'90%',}} type="email" name="" id="" /> <br />
                   <textarea  className="my-3 bg-dark border-light rounded-pill " placeholder="text here" style={{ width:'92%',}} name="" id="" cols="50" rows="5"></textarea> <br />
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