import React from "react";
import { Component } from "react/cjs/react.production.min";
import './card-style.css'



class Card extends Component{
    constructor(props)
    {
        super(props)
    }

    render()
    {

        const go =() =>{
            const detail=this.props.next
            window.location.href=detail
        }

        const Locate = ()=>
        {
            const lont =this.props.long
            const latt=this.props.lat
            window.open("https://maps.google.com?q="+lont+","+latt );
        }
        return(
            <div className="card text-center" >
                <div className="overflow">
                    <img src={this.props.image} alt="Image1" className="card-img-top" onClick={go}></img>
                </div>
    
                <div className="card-body dark-text">
                    <h4 className="card-title">{this.props.Title}</h4>

                    <p className="card-text text-secondary">{this.props.data}</p>
    
                    <button className="btn btn-outline-success" onClick={Locate}> Go to the Location</button>
                </div>
            </div>
    
        )
    }
}
export default Card