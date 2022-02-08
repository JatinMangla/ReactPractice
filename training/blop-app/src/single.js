
import { Component } from "react/cjs/react.production.min";
//import profile1 from './image/photo1.jpg'

class Singleton extends Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(
            <div className='ui comments'>
            <div className='comment'>
                <a href="/" className="avatar">
                    <img src={this.props.image}></img>
                </a>
                <div className='content'>
                <a href="/" className="author">
                    {this.props.name}
                </a>
                <div className='metadata'>
                    <span className='date'>{this.props.date}</span>
                </div>
                <div className='text'>
                    {this.props.text}
                </div>
                </div>
            </div>
            </div>
        )
    }
}


export default Singleton