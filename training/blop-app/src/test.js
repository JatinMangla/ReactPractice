import React,{Component} from "react";
import {Navbar,Container,Nav,FormControl,Form,Button} from 'react-bootstrap'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Contact from "./contactUs";
import ChangePhoto from "./Component/RandomImg";
import Img from "./Component/RandomImg";
import Car from "./Cards";

class Test extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            phto:""
        }
        
    }

    changedata(e)
    {
        this.setstate({
            phto:e.target.phto
            
        })
        
    }
    render()
    {
        return(
            <BrowserRouter>         
                    <div>
                        
                    <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand>Tourism</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/package"}>Package</Nav.Link>
                        <Nav.Link as={Link} to={"/contactus"}>Contact Us</Nav.Link>
                    </Nav>
                   
                    </Container>
                    {/* <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"/>
                    <Button variant="outline-success">Search</Button>
                    </Form>  */}

                <Form className="d-flex">
                <input type="text" className='form-control' value={this.phto} onChange={() => {
                    this.changedata()
                   
                }}></input>
                {/* <Img getphoto={this.changedata}></Img> */}
                


                <Button variant="outline-success" type='submit' onClick={ChangePhoto} className='me-2'>Search</Button>
                </Form>  
                    </Navbar>
                    </div>
                    <div>
                    <Routes>
                    <Route path="/contactus" element={<Contact/>}/>
                    <Route path="/" element={<Car/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        )
    }
}
export default Test