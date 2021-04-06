import axios from 'axios';
import React, {useState} from 'react';
import { authenticate } from '../Auth';

let Login = () => {
   
    let initialState = {
      email : "",
      password : ""
    }


    let [user, setUser] = useState(initialState) 
    let [loginStatus, setLoginStatus] = useState("");


    let emailHandler = (event) => {
      setUser({...user,email: event.target.value})
      
    };

    let passwordHandler = (event) => {
      setUser({...user,password : event.target.value});
                
    };
    
    let submitHandler =async (event)=> {
      
      event.preventDefault();
    
      let result = await axios.post('http://localhost:8000/login',user);
      let token  = "";
      setLoginStatus(result.data.status);
      console.log(loginStatus)
      if(loginStatus === "Login Success") {
        token = result.data.message;
        console.log(token);
       authenticate(token);
       setLoginStatus(true);
       console.log(loginStatus)
      }
          
  };

  let resetHandler = (e) =>{
    setUser(initialState)
    
    
  }
    return <React.Fragment>
     
     <section className="mt-4"> 
       <div className="container">
         <div className="row">
         <div className="col-md-4 m-auto">
         <div className="card">
         <div className="card-header"><h4>Login-Form</h4></div>
         <div className="card-body">
          <form onSubmit={submitHandler}>          
          <div className="form-group">
            <input type="email" className="form-control" placeholder="email" value ={user.email} name="email"
            onChange={emailHandler}/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="password"  value ={user.password} name="password"
            onChange={passwordHandler}/>
          </div> <br></br>
          <div className="form-group">
            <input type="submit" className="mx-4 btn btn-success btn-sm" />
            <button type = "reset" className="mx-2 btn btn-success btn-sm" onClick={resetHandler} >reset</button>
           </div>
                   
          </form>
         </div>
         </div>
         </div>           
         </div>         
      </div>     
       
       </section> 
    </React.Fragment>
}

export default Login;  