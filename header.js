import React from 'react';
import {Outlet, Link} from "react-router-dom"




const Header = ()  => {


    return ( 
        

<>


<nav className='menubg'>

<br/>

<ul className='flexmenu'>


<li>

<Link to="/" className='menuitem'>Home</Link>

</li>

<li>

<Link to="/about" className='menuitem'>About us</Link>

</li>


<li>

<Link to="/services" className='menuitem'>services</Link>

</li>

<li>

<Link to="/contact" className='menuitem'>contact</Link>

</li>

<li>

<Link to="/blog" className='menuitem'>Blogs</Link>

</li>













</ul>


</nav>


<Outlet/>
</>

    );


}






export default Header;
