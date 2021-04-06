import React from 'react';
import { Link } from "react-router-dom";
import { signOut } from '../Auth/index';


let Navbar = () => {

    return <React.Fragment>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
     
    <div className="collapse navbar-collapse" >
      <ul className="navbar-nav ml">
        <li className="nav-item active">
        <Link className="nav-link" to="/login"> Login </Link>
        </li>
        </ul>
        <Link className="nav-link" to="/favourite"> </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className="nav-link" to="/signUp"> SignUp </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className="nav-link" to="/login"> Login </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <Link className="nav-link" to="/dashboard"> Dashboard </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <Link onClick={signOut} className="nav-link" to="/"> signOut </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

     </div>
    </nav>
  </React.Fragment>

}

export default Navbar;