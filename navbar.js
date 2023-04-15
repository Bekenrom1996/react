import React, {Fragment,useState} from "react";
import "../Ctv/navbar.css";
import Logo from '../sidebar.png';


 const  Navbar = ()=>  { 

const [showMen, setShowMen] = useState(false)


    return( 

<>

<nav>


<h1>Downtown<span></span></h1>
<div className={showMen ?  "men mobile-men" : "men"} >

<ul>
<li><a href="/">Home</a></li>
<li><a href="/">Blog</a></li>
<li><a href="/">Agent</a></li>
<li><a href="/">about us</a></li>





</ul>
<div className="btn">


    <a href="#"><button>Add property</button></a>
</div>


</div>
<img  src={Logo} alt="my logo" onClick={() => setShowMen(!showMen)}/>


</nav>

<Fragment/>
</>

    )
}







export default Navbar



