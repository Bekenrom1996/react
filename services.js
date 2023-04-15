import React,{Fragment, useState} from "react"
import ServicesDetail from "../detail/ServicesDetail"
import "../Ctv/services.css"



const Services = () => {

const[detail, setDetail] = useState(ServicesDetail)

    return(

        <Fragment>

<section className="services">


    <div className="heading">
<span>Our services</span>
<h2>The smartest way to buy a home</h2>

    </div>
    <div className="services-row">

{

    detail.map((detail)=> {

    return(

        <div className="services-card">


<div className="services-column">
            <div className="content">

                <div className="content">
                    <div className="services-icon">
                        <img src={detail.Image} alt='icon'/>

                    </div>
                    <div className="services-content">
                        <h3>{detail.heading}</h3>
                        <p>{detail.info}</p>
                    </div>
                </div>
            </div>
        </div>







</div>
    )
})
}





       
    </div>
</section>




        </Fragment>
    )
}

export default Services