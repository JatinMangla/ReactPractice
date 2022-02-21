import React, {Component} from "react";
import Card from "./card";
import gate from '../src/image/download.jpg'
import taj from '../src/image/taj.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import qutub from './image/qutub.jpg'
import hawa from './image/hawa.jpg'

class Car extends Component
{
    render()
    {
        return(
            <div>
                <br></br>
            <div className="div.container-fluid d-flex justify-content-center" >
                <div className="row">
                    <div className="col-md-3" ><Card image={gate} Title="India Gate" long="28.612894" lat="77.229446" next="https://www.holidify.com/places/delhi/india-gate-sightseeing-1718.html"  
                    data="The All India War Memorial, popularly known as the India Gate, is located along the Rajpath in New Delhi."></Card></div>
                    <div className="col-md-3"><Card image={taj} Title="Taj Mahal" lat="78.042068" long="27.173891"  next="https://www.holidify.com/places/agra/taj-mahal-sightseeing-1020.html"
                     data="One of the seven wonders of the world, Taj Mahal is located on the banks of River Yamuna in Agra."></Card></div>
                     <div className="col-md-3"><Card image={qutub} Title="Qutub Minar" long="28.5244281" lat="77.1854559" next="https://www.holidify.com/places/delhi/qutub-minar-and-complex-sightseeing-1727.html"
                     data="Qutub Minar is a minaret or a victory tower located in Qutub complex, a UNESCO World Heritage Site in Delhi's Mehrauli area"></Card></div>
                     <div className="col-md-3"><Card image={hawa} next="https://www.holidify.com/places/jaipur/hawa-mahal-sightseeing-2131.html"
                      data="The massive edifice of Hawa Mahal stands at the intersection of the main road in Jaipur" long="26.912417" lat="75.787288"></Card> </div>
                </div>
            </div>
            </div>
           


        )
    }
}

export default Car

