import React,{Fragment,useState} from 'react'
import WorkDetail from '../detail/WorkDetail'
import "../Ctv/work.css"




const Work = () => {

const [detail, setDetail] = useState(WorkDetail)


    return(

        <Fragment>




            <section className='work'>


<div className='overlay'></div>


<div className='work-container'>
    <div className='work-heading'>
        <span>work flow</span>
        <h2>How It Work</h2>
    </div>
    <div className='column1'>
        <div className='work-row'>


{



    detail.map((detail)=> {
return(

<div className='work-card'>
                <div className='work-column'>
                    <div className='content'>
                        <div className='number'>
                            <span>{detail.number}</span>
                        </div>
                        <div className='work-content'>
                            <h3>{detail.heading}</h3>
                            <p>{detail.info}</p>
                        </div>
                    </div>
                </div>
            </div>



)
    })
    
    
}






            
        </div>


    </div>
</div>


            </section>
        </Fragment>
    )
}



export default Work