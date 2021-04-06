import React, {Fragment} from 'react';
import './App.css';
import Bootstarp from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './Task/Login';
import SignUp from './Task/SignUp';
import Home from './Task/Home'
import Favourite from './Task/Favourite';
import Navbar from './Task/Navbar';
import DashBoard from './Auth/DashBoard';
import PrivateRoute from './Auth/PrivateRoute';



let App = () => {
  return (<React.Fragment> 
           <Router>
             <Navbar/>
             <Switch>
           <PrivateRoute exact path ="/home" component={Home}/> 
           <Route exact path ="/favourite" component={Favourite}></Route> 
           <Route exact path ="/" component={Login}></Route>                           
          <Route exact path ="/login" component={Login}></Route>          
          <Route exact path ="/signUp" component={SignUp}></Route>
          <PrivateRoute exact path = "/dashBoard" component={DashBoard}/>       
         </Switch>
         </Router>
         
          </React.Fragment>
          
  );           
};

export default App;  
