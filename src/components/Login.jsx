import '../styles/login.css';
import { UserContext } from '../wrappers/UserContext';
import { ReqLoginLoginPage } from '../wrappers/RequiresLogin';
import { useState, useContext } from 'react';
import { getUser } from './utils/api';
import { ErrorMessage } from './ErrorMessage';


const Login = () => {
  const { setUser } = useContext(UserContext)
  const [formInput, setFormInput] = useState({username: ''});
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormInput(values => ({...values, [name]: value }))
  }

  const LoginSubmit = (event) => {
    event.preventDefault();
    getUser( formInput.username )
    .then(userData => {
      // if username exists in the DB
      if (userData) {
        if (userData.user.username === formInput.username) {
          // setuser...
          setUser(formInput.username)
          // use session storage (at least) to minimise data leakage
          sessionStorage.setItem('username', userData.user.username)
          // remove any error tags
          setError(false);
        }
      } else {
        setError(true)
      } 
    })
  }

  console.log('there is an error', error)

  return (
    <ReqLoginLoginPage>
      <section className='login_section'>
      <h1> 
        login
      </h1>
      <form id='login_form' className='login_form' onSubmit={LoginSubmit}>
        <label id='username_label' htmlFor='username'>username</label>
        <input 
          type='text' 
          id='username_input'
          className='username_input'
          name='username' 
          placeholder='username (just add jessjelly)'
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

