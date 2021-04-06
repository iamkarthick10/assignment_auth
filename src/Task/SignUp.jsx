import React, {useState} from 'react';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios'
import {Link } from 'react-router-dom';


let SignUp = () => {
    
    let [user, setuser] = useState({firstName:"",lastName: "",email:"",dob : "",password:"",confirmpassword:""}) 
    
    let [result, setresult] = useState("")
    

    let inputHandler = (event) => {
      setuser({
        ...user,
        [event.target.name] :  event.target.value,      
      })
    }; 
    let signUphandler =async (event)=> {
      event.preventDefault();
      if(user.password === user.confirmpassword) {
        console.log(user);
        let res = await axios.post("http://localhost:8000/signup",user)
        setresult(res);
        console.log(result);
      }
      else {
        alert('Password doesnt match')
      }
     
    };
  
      return <React.Fragment>
       <section className="p-3 bg-warning">
       <div className="container">
       <div className="row">
       <div className="col">
       <div className="">  
       <p>
         <i className="fa fa-sign-in-alt"></i>
       </p> 
       </div>
  
       </div>
       </div>
       </div>
  
       </section>
       <section className="mt-4"> 
         <div className="container">
           <div className="row">
           <div className="col-md-4 m-auto">
           <div className="card">
           <div className="card-header"><h4>Sign up-Form</h4></div>
           <div className="card-body">
            <form onSubmit={signUphandler}>
            <div className="form-group">
            First Name* <br></br>
              <input type="text" className="form-control"  value ={user.fname} name="firstName"
              onChange={inputHandler}/>
            </div><br></br>
            <div className="form-group">
            Last Name* <br></br>
              <input type="text" className="form-control"  value ={user.lname} name="lastName"
              onChange={inputHandler}/>
            </div><br></br>
            
            <div className="form-group">
            Email* <br></br>
              <input type="email" className="form-control"  value ={user.email} name="email"
              onChange={inputHandler}/>
            </div> <br></br>


            <div className="form-group">
            Date of Birth <br></br>   
              <input type="date" className="form-control"  value ={user.dob} name="dob"
              onChange={inputHandler} />
            </div> <br></br>


            <div className="form-group">
            Password* <br></br>
              <input type="password" className="form-control"  value ={user.password} name="password"
              onChange={inputHandler}/>
            </div> <br></br>
            <div className="form-group">
            confirm Password* <br></br>
              <input type="password" className="form-control"   value ={user.confirmpassword} name="confirmpassword"
              onChange={inputHandler}/>
            </div> <br></br>
            <div className="form-group">
              <input type="submit" className="mx-2 btn btn-success btn-sm" />
              <Link  className="mx-2 btn btn-success btn-sm" to="/Login" >cancel</Link>
              
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
  
  export default SignUp;  