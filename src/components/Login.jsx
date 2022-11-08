import '../styles/login.css';
import { UserContext } from '../wrappers/UserContext';
import { ReqLoginLoginPage } from '../wrappers/RequiresLogin';
import { useState, useContext } from 'react';
import { logIn } from './utils/api';
import { ErrorMessage } from './ErrorMessage';


const Login = () => {
  const { setUser } = useContext(UserContext)
  const [formInput, setFormInput] = useState({});
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormInput(values => ({...values, [name]: value }))
  }

  const LoginSubmit = (event) => {
    event.preventDefault();

    logIn( formInput )
    .then(userData => {
      // if we get a return from the login
      if (userData) {
        if (userData.msg === 'success') {
          // setuser
          setUser(formInput.username)
          // use session storage (at least) to minimise data leakage
          sessionStorage.setItem('username', formInput.username)
          // remove any error tags
          setError(false);
        }
      } else {
        setError(true)
      } 
    })
  }

  return (
    <ReqLoginLoginPage>
      <section className='login_section'>
      <h1> 
        login
      </h1>
      <form id='login_form' className='login_form' onSubmit={LoginSubmit}>

        <input 
          type='text' 
          id='username_input'
          className='username_input'
          name='username' 
          placeholder='username...'
          onChange={handleChange} 
          required/>
          { error ? <ErrorMessage error={error}/> : null } 

        <input 
          type='password' 
          id='password_input'
          className='username_input'
          name='password' 
          placeholder='password...'
          onChange={handleChange} 
          required/>
          { error ? <ErrorMessage error={error}/> : null } 

        <input type='submit' className='login_submit' value='Submit'/>
      </form>
    </section>
    </ReqLoginLoginPage>
  )
}

export default Login;

