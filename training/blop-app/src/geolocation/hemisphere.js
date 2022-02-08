import React from "react";
import south from '../image/south.png'
import north from '../image/north.jpg'
//import './hemisphere.css'



    const Hemisphere= ({latitude})=>{
        const hemisphere= latitude>0?'You are currently in : Northern Hemisphere' : 'You are currently in : Southern Hemisphere'
        const demo = latitude>0 ? north : south
        if(demo===north){
             return(
        <div className="north">
            <div className="inner">
            <img src={demo} alt="" />
            </div>
            <h1> {hemisphere} </h1>
        </div>
    )

        }
        else{
             return(
        <div className="south">
            <div className="inner">
            <img src={demo} alt="" />
            </div>
            <h1> {hemisphere} </h1>
        </div>
    )
        }
   
}
export default Hemisphere