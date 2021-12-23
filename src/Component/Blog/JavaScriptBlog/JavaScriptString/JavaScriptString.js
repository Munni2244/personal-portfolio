import React from 'react';

const JavaScriptString = () => {
    return (
        <div id='javaScript' style={{marginTop:'80px'}} >
          <div className='row'>
              <div>
              <div>
           <h1>JavaScript String</h1>
            <p>
                String are texts. Its hold many  data  text that can be represent  sequence of charecter.JavaScript hold a series of data type as well as "Maria Noor". <br /> String  can be any single quotes ' 'or double quotes " ".
            </p>
            <h6>
                Example: <br />
                const  name= “Java Script string”;
            </h6>
            <p>  JavaScript string  started index  number is  0. And second element index number is 1.</p>
           </div>
             <br />
             <div>
                 <h1>Let  Know About  JavaScript String Method</h1>
                 <p>Many string method are available in JavaScript . </p>
                 <h5>For Example:</h5>
                 <h3>String.toUppercase()  and String.toLowercase()</h3>
                 <p>.toUppercase() method  convert  all character  Lower format to Upper format. And   .toLowercase() convert  Lower  to upper format.</p>
                 <h5>Example:</h5>
                 <h6>const  name= "JavaScript";</h6>
                 <h6>console.log(name.toLowercase());</h6>
                 <h6>console.log(name.toAppercase());</h6>
                 <br />
                 <h5>OutPut</h5>
                 <h6>javascript</h6>
                 <h6>JAVASCRIPT</h6>

             </div>
             <br />
             <div>
                 <h3>String.trim()  Method</h3>
                 <p>String.trim() method  use for remove  space  after and before  character in string.</p>
                 <h5>Example:</h5>
                 <h6><span>const  name= "   {'\u00A0'}</span> JavaScript  trim  {'\u00A0'}   string  {'\u00A0'}   ";</h6>
                 <h6>console.log(name.trim());</h6>
                 <br />
                 <h5>OutPut</h5>
                 <h6>"JavaScript trim string"</h6>
             </div>
             <br />
             <div>
                 <h3>String.replace()   Method.</h3>
                 <p>.replace()  method   replace value  with another value in string.</p>
                 <h5>Example:</h5>
                 <h6>const  name = "Mariya";</h6>
                 <h6>console.log(name.replace('ya', 'am'));</h6>
                 <br />
                 <h5>OutPut</h5>
                 <h6>"Mariam"</h6>
             </div>
                 <br />
             <div>
                 <h3>String.concat()  Method</h3>
                 <p>.concat() method use  for combines 2 or more string  and it return one string. You can  add one or  more string into single string . </p>
                 <h5>Example:</h5>
                 <h6>const  string1= "Hellow";</h6>
                 <h6>const  string2= "How are you"?;</h6>
                 <h6>console.log(string1.concate(string2));</h6>
                 <br />
                 <h5>OutPut</h5>
                 <h6>Hellow How are you?</h6>
             </div>
                 <br />
             <div>
                 <h3>String.charAt() Method</h3>
                 <p>.charAt()   method  return  character  at the specified  index value. </p>
                 <h5>Example:</h5>
                 <h6>const sub= "JavaScript";</h6>
                 <h6>console.log(sub.charAt(4));</h6>
                 <br />
                 <h5>OutPut</h5>
                 <h6>S</h6>
             </div>
                 <br />
             <div>
                 <h3>String.split()  Method</h3>
                 <p>.split()  is return  an array. This string  split string  into an array of sub String. </p>
                 <h5>Example:</h5>
                 <h6>const  sub= "maria-munni";</h6>
                 <h6>console.log(sub.split(-));</h6>
                 <br />
                 <h5>OutPut</h5>
                 <h6>maria, munni</h6>
             </div>
                 <br />
              </div>
           
            </div>

        </div>
    );
};

export default JavaScriptString;