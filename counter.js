import React, {Fragment, useState} from 'react';
import VisibilitySensor from "react-visibility-sensor";

const Counter = ({className, ...rest}) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);
    return(

<Fragment>

<section className="counter">


<div className="counter-container">

    <div className="counter-row">

        <div className="counter-column">
 
            <strong>

                <CountUp {...rest} start = {viewPortEntered ?  null : 0} end={305} >
   {({countUpRef}) =>{
return(

    <VisibilitySensor 

active ={!viewPortEntered}
onChange = {isVisible =>{

    if(isVisible){
        setViewPortEntered(true);

    }
}}
delayedCall
>
<span className='counter-number' ref={countUpRef}/>
    </VisibilitySensor>
)

   }}
                </CountUp>
            </strong>
        </div>



        <div className="counter-column">
 
 <strong>

     <CountUp {...rest} start = {viewPortEntered ?  null : 0} end={305} >
{({countUpRef}) =>{
return(

<VisibilitySensor

active ={!viewPortEntered}
onChange = {isVisible =>{

if(isVisible){
setViewPortEntered(true);

}
}}
delayedCall
>
<span className='counter-number' ref={countUpRef}/>
</VisibilitySensor>
)

}}
     </CountUp>
 </strong>
</div>





<div className="counter-column">
 
 <strong>

     <CountUp {...rest} start = {viewPortEntered ?  null : 0} end={305} >
{({countUpRef}) =>{
return(

<VisibilitySensor
active ={!viewPortEntered}
onChange = {isVisible =>{

if(isVisible){
setViewPortEntered(true);

}
}}
delayedCall
>
<span className=' counter-number' ref={countUpRef}/>
</VisibilitySensor>
)

}}
     </CountUp>
 </strong>
</div>





    </div>
</div>

</section>
 


</Fragment>

    )
}





export default Counter;