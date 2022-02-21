import React, { useState } from 'react'
import axios from 'axios'
import Test from '../test'
import {Navbar,Container,Nav,FormControl,Form,Button} from 'react-bootstrap'
import { Component } from 'react/cjs/react.production.min'

const Img = (props)=>
{
    
        // let getPhoto={this:props.getphoto}
        // console.log(getPhoto)

    // const [photo,setPhoto] = useState("")
    // const [result, setResult] = useState([])
    
    // const ChangePhoto = () => {
    //     axios.get(`https://api.unsplash.com/search/photos?page=1&query=dog&client_id=E3SG3J5zXBdG3VhkqieiMKnqV3YoR3Z-FiPpUNXcHhI`)
    //         .then((response) => {
    //              console.log(response.data);
    //             //setResult(response.data.results);
    //         })
    // }
    return (
        
        <>
             {/* <div className='container text-center my-5'>
                <input type="text" className='form-control' value={photo} onChange={(e) => {
                    setPhoto(e.target.value)
                }} />
                <button type='submit' onClick={ChangePhoto} className='btn btn-primary my-2'>Get Photo</button>
            </div>  */}

            {/* <div>
                        
                        <Navbar bg="dark" variant="dark">
                            <Container>
                            <Navbar.Brand href="#home">Tourism</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href='/home'>Home</Nav.Link>
                        <Nav.Link href='/package'>Package</Nav.Link>
                        <Nav.Link href='/contact'>Contact Us</Nav.Link>
                    </Nav>
                            </Container>
                        <div className='container text-center my-5'>
                <input type="text" className='form-control' value={photo} onChange={(e) => {
                    setPhoto(e.target.value)
                }} />
                <Button type='submit' onClick={ChangePhoto} className='btn btn-primary my-2'>Get Photo</Button>
            </div> 
                        </Navbar>
                        </div> */}

            {/* <div className="container">
                <div className="row text-center text-lg-start">
                    {result.map((value) => {
                        return (
                            <div className="col-lg-3 col-md-4 col-6">
                                    <img className="img-fluid img-thumbnail d-block mb-4 h-100" src={value.urls.small} alt='image' />
                            </div>
                        )
                    })}
                </div>

            </div> */}
        </>
    )
        
}

export default Img