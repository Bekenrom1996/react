import React,{Fragment, useState} from 'react';
import Collapsible from 'react-collapsible'
import pic from "../img/andrew.jpg"
import Question from "../detail/AccordingDetail"
import "../Ctv/according.css"





const According = () =>{

const [detail, setDetail] = useState(Question)

  return (
<Fragment>

    <section className='accord'>



<div className='accord-row'>
<div className='left'>

  <h3>Frequently asked</h3>


  {

    detail.map((detail)=> {

      return(

        <div className='left-content'>
          <Collapsible  
          className='Collapsible' 
          trigger={[<i class="fa-solid fa-angle-down"></i>, detail.question]}
          triggerWhenOpen = {[<i class="fa-solid fa-angle-up"></i>, detail.question]}
          >
          
     

     <p className='content-show'>

      {detail.answer}
     </p>




          </Collapsible>
          </div>

      )
  })
  }

</div>

<div className='right'>

  <img   src={pic} alt='person' />

</div>

</div>

    </section>
    </Fragment>
  )
}



export default According