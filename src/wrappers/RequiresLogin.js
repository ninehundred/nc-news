import { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";
import  { Redirect } from 'react-router-dom'


export const ReqLoginVote = ({ children }) => {
  const { isLoggedIn } = useContext(UserContext);
  //return <div>{isLoggedIn && children}</div> <-- Same as below
  return <div>{isLoggedIn ? children : null} </div>;
};


export const ReqLoginLoginPage = ({ children }) => {
  const { isLoggedIn } = useContext(UserContext);
  if (isLoggedIn) {
    return (
      <Redirect to='/'/>
    )
  } else {
    return children
  }
};

export const ReqLoginAccountPage = ({ children }) => {
  const { isLoggedIn } = useContext(UserContext);
  if (!isLoggedIn) {
    return (
      <Redirect to='/'/>
    )
  } else {
    return children
  }
};

export const ReqLoginNavLoginBtn = ({ children }) => {
  const { isLoggedIn, setUser } = useContext(UserContext);
  //set user to null to log out
  const logUserOut = (event) => {
    setUser(null);
    sessionStorage.removeItem('username')
  }

  // check if logged in, if so only display login text
  if (isLoggedIn) {
    return (
      <>
      <Link className='navbar_route home_btn' style={{'marginLeft' : '10px'}} to="/account">account</Link>
      <Link className='navbar_route login_btn' to="/" onClick={(event) => logUserOut(event)}>logout</Link>
      </>
    )
  // else return the original login form
  } else {
    return children
  }
};