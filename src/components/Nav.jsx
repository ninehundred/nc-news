import '../styles/nav.css';
import React from "react";
import { Link } from "react-router-dom";
import { ReqLoginNavLoginBtn } from '../wrappers/RequiresLogin';

export const Nav = () => {
  return (
    <nav className='navbar'>
      <Link className="navbar_header" to="/">Cnews</Link>
      <Link className='navbar_route home_btn' to="/">home</Link> 
      <ReqLoginNavLoginBtn>
        <Link id='login_button' className='navbar_route login_btn' to="/login">login</Link>
      </ReqLoginNavLoginBtn>
    </nav>
  );
};

