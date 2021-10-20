import '../styles/login.css';
import { UserContext } from '../wrappers/UserContext';
import { ReqLoginLoginPage } from '../wrappers/RequiresLogin';
import { useState, useContext } from 'react';
import { getUser } from './utils/api';

const Login = () => {
  const { setUser } = useContext(UserContext)
  const [formInput, setFormInput] = useState({username: ''});

  //TODO - check against users from db by sending rather than requesting.

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormInput(values => ({...values, [name]: value }))
  }
  //console.log(formInput)

  const LoginSubmit = (event) => {
    //console.log(formInput.username)
    event.preventDefault();
    getUser( formInput.username )
    .then(data => {
      console.log(data)
      if (data.user.username === formInput.username) {
        setUser(formInput.username)
      }
    })
  }

  return (
    <ReqLoginLoginPage>
      <section className='login_section'>
      <h1> 
        login
      </h1>
      <form className='login_form' onSubmit={LoginSubmit}>
        <label htmlFor='username'>username</label>
        <input 
          type='text' 
          className='username_input'
          name='username' 
          placeholder='username (just add jessjelly)'
          onChange={handleChange} 
          required/>
        <input type='submit' className='login_submit' value='Submit'/>
      </form>
    </section>
    </ReqLoginLoginPage>
    
  )
}

export default Login;

