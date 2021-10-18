import '../styles/nav.css';
import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className='navbar'>
      <Link className="navbar_header" to="/">Cnews</Link>
      <Link className='navbar_route' to="/">home</Link>     
      <Link className='navbar_route' to="/login">login</Link>
    </nav>
  );
};

