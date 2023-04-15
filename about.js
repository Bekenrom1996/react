import React from 'react';
import Lost from '../tech1.png';
import Love from '../tech2.png';
import Like from '../tech3.png';




function About() { 

return( 

<>
<div className='range'>

  <h3>About our building<br/> services</h3>
  <p>Applisoft Building Services ltd are builders 
    refurbishment specialist management contractors.<br/>
    we specialise in commercial and residential<br/>
    revonation, office contract and maintenamce services
  </p>
  <button>contact us</button>
  <h4>What We Do</h4>
<img src={Lost} alt="mylogo" />
<h5>Building contractors</h5>
<h6>Construction</h6>|<br/>
<h6>Conversion</h6>|
<h6>Renovation</h6>|
<h6>Repair</h6>|


<img src={Love} alt="mylogo" />
<h5>Facilities Management</h5>
<h6>Construction</h6>|<br/>
<h6>Conversion</h6>|
<h6>Renovation</h6>|
<h6>Repair</h6>|


<img src={Like} alt="mylogo" />
<h5>Commercial Renovations</h5>
<h6>Construction</h6>|<br/>
<h6>Conversion</h6>|
<h6>Renovation</h6>|
<h6>Repair</h6>|





</div>

</>
)


}


export default About