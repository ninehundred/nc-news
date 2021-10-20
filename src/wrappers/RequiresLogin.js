import { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";

export const ReqLoginArticleVote = ({ children }) => {
  const { isLoggedIn } = useContext(UserContext);
  //return <div>{isLoggedIn && children}</div> <-- Same as below
  return <div>{isLoggedIn ? children : null} </div>;
};


export const ReqLoginLoginPage = ({ children }) => {
  const { isLoggedIn } = useContext(UserContext);
  //return <div>{isLoggedIn && children}</div> <-- Same as below
  if (isLoggedIn) {
    return (
      <p className='login_text'> Logged In </p>
    )
  } else {
    return children
  }
};

export const ReqLoginNavLoginBtn = ({ children }) => {
  const { isLoggedIn, setUser } = useContext(UserContext);

  const logUserOut = (event) => {
    setUser(null);
  }

  if (isLoggedIn) {
    return (
      <Link className='navbar_route' to="/" onClick={(event) => logUserOut(event)}>logout</Link>
    )
  } else {
    return children
  }
};