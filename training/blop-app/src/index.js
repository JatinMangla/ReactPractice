import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import photo1 from './image/photo1.jpg'
import Singleton from './single';
//import {Map, GoogleApiWrapper} from 'google-map-react'
//import DetailsMap from './map'
import Car from './Cards'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Location from '../src/geolocation/Location'
import Img from './Component/RandomImg'


/*const App = () => {
  return(
    <div className='ui commment'>
      <Singleton image={photo1} name="jatin" date="today at 5PM" text="its very cold"></Singleton>
      <Singleton image={photo1} name="mangla" date="today at 8PM" text="its hot"></Singleton>
    </div>
  )
}*/

/*
const render = (status Status) => {
  return <h1>{status}</h1>;
};

const Map: React.FC<{}> = () => {};

const ref = React.useRef<HTMLDivElement>(null);
const [map, setMap] = React.useState<google.maps.Map>();

React.useEffect(() => {
  if (ref.current && !map) {
    setMap(new window.google.maps.Map(ref.current, {}));
  }
}, [ref, map]);

return <div ref={ref} />


<Wrapper apiKey={"YOUR_API_KEY"} render={render}>
  <YourComponent/>
</Wrapper>
*/
/*
function APp()
{
  const [latitude, setLatitude] = React.useState('')
  const [longitude, setLonditude] = React.useState('')
  React.useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=> {
      setLatitude(position.coords.latitude)
      setLonditude(position.coords.longitude)
    })
  })
  

}*/


ReactDOM.render(
    <Img/>,
  document.getElementById('root')
);


