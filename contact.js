import React from 'react';





function Contact () { 


    return( 

<>

<div className='blank'>

<h2>Contact Us</h2>
<p>Please use the Webform below to contact us and we will<br/>  
    get back to you as soon as possible</p>
    <button>SEND A MESSAGE</button>

</div>
<div className='blood'>
<h2>Get In Touch</h2>
<form action='#' method='POST'>
						<label>
							<input style={{borderRadius: 10, paddingTop: 9, paddingBottom:9, }}  type="text" placeholder="Enter your name"required />
						</label>
						<br /><br />
						<label>
							<input style={{borderRadius: 10,paddingTop: 9, paddingBottom:9}} type="email" placeholder="Enter your email"required />
						</label>

						<label>
							<input style={{borderRadius: 10,paddingTop: 9, paddingBottom:9, display:"block", marginTop: 10 }} type="number" placeholder="Enter your phone number"  mini-minLength="11" required/>
						</label>

						<br /><br />


						<label>
							<input style={{borderRadius: 10, paddingTop: 9, paddingBottom:9}}  type="text" placeholder="Enter your Address"required />
						</label>
						<br /><br />
                         
						<button style={{backgroundColor: "green",paddingTop: 10, paddingBottom: 10, width: 100, paddingLeft: 1}} type="submit">Submit</button>
						<p style={{color: "lightgreen", fontSize: 16}}>Done.</p>
					</form>


</div>
</>


    )
}



export default Contact;