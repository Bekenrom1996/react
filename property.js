import React,{Fragment, useState} from 'react'
import PropertyDetail from '../detail/PropertyDetail'
import "../Ctv/property.css"

const Property = () => { 

const [detail, setDetail] = useState(PropertyDetail)



return(

<Fragment>
<section className='property'>



    <div className='center'>

        <h3>Popular properties</h3>
    </div>
    <div className='row'>

{

detail.map((detail)=>{ 

return ( 
    
<div className='column'>
            <div className='single-property'>
                <div className='card'>

                    <div className='property-thumb'>
                        <div className='property-tag'>For Sale</div>
                        <img src={detail.Image} alt='palace'/>
                    </div>
                    <div className='property-content'>
                        <h3>{detail.heading}</h3>
                        <div className='mark'>

                        <span>{detail.span}</span>
                    </div>
                    <span className='amount'>{detail.amount}</span>
                </div>
                <div className='property-footer'>
                    <ul>

                        <li>
                            <span>{detail.size}</span>
                        </li>
                        <li>
                            <img src={detail.bedImage} alt="bed"/>
                            <span>{detail.bath}</span>
                        </li>
                        <li>

                        <img src="" alt=""/>
                        <span></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

)
})


}

</div>
<div className='more-property'>
    <a className='property-btn' href='#'>More Property</a>
    
</div>



</section>
</Fragment>

)

}

export default Property