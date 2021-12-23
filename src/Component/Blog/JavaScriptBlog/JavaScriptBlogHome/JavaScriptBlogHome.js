import React from 'react';
import JavaScriptString from '../JavaScriptString/JavaScriptString';

const JavaScriptBlogHome = () => {
    return (
        <div className='row'>
            <div style={{marginTop:'70px'}} className='col-12 col-lg-2 col-md-2  '>
                  <div className='string'>
                      <a href="#javaScript">JavaScript String</a>
                      <a href="#bubble">Event Bubbling</a>
                      <a href="#delegate">Event Delegate</a>
                  </div>
              </div>
              <div  className='col-12 col-lg-10 col-md-10 '>
                <JavaScriptString></JavaScriptString>
              </div>
        </div>
    );
};

export default JavaScriptBlogHome;