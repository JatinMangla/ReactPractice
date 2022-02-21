import React,{Component} from "react";
import '../Component/Login.css'

class Login extends Component
{
    render()
    {
        return(
          <body>
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-xl-9 mx-auto">
                <div className=" border-0 shadow rounded-3 overflow-hidden ">
                  <div className=" p-5 p-sm-6">
                  <div className="card-img-left">Register
                 </div>
                 <br></br>
                    <form>
        
                      <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInputUsername" placeholder="myusername" required autofocus/>
                        <label for="floatingInputUsername">Username</label>
                      </div>
        
                      <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInputEmail" placeholder="name@example.com"/>
                        <label for="floatingInputEmail">Email address</label>
                      </div>
        
        
                      <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label for="floatingPassword">Password</label>
                      </div>
        
                      <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPasswordConfirm" placeholder="Confirm Password"/>
                        <label for="floatingPasswordConfirm">Confirm Password</label>
                      </div>
        
                      <div className="d-grid mb-2">
                        <button className="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="submit">Register</button>
                      </div>
        
                      <a className="d-block text-center mt-2 small" href="#">Have an account? Sign In</a>
        
                      <hr className="my-4"/>
        
                      <div className="d-grid mb-2">
                        <button className="btn btn-lg btn-google btn-login fw-bold text-uppercase" type="submit">
                          <i className="fab fa-google me-2"></i> Sign up with Google
                        </button>
                      </div>
        
                      <div className="d-grid">
                        <button className="btn btn-lg btn-facebook btn-login fw-bold text-uppercase" type="submit">
                          <i className="fab fa-facebook-f me-2"></i> Sign up with Facebook
                        </button>
                      </div>
        
                      </form>
                    
                  </div>
              </div>
            </div>
          </div>
          </div>
        </body>
        

        )
    }
}

export default Login