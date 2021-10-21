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
    event.preventDefault();
    getUser( formInput.username )
    .then(userData => {
      console.log(userData)
      // if username exists in the DB
      if (userData) {
        if (userData.user.username === formInput.username) {
          // setuser...
          setUser(formInput.username)
          // use session storage (at least) to minimise data leakage
          sessionStorage.setItem('username', JSON.stringify(userData.user.username))
          // remove any error tags associated with 
          const liElements = document.querySelectorAll("p[id^='error_message']");
          if (liElements.length > 0) {
            liElements[0].remove();
          }
        }
      } else {
        const errorNode = document.createElement("p"); 
        errorNode.innerHTML = 'username not found'
        errorNode.classList.add('error_message')
        errorNode.setAttribute("id", "username_error_message"); 
        const userNameInputNode = document.getElementById('username_input')  
        userNameInputNode.insertAdjacentElement('afterend', errorNode )
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
        <label id='username_label' htmlFor='username'>username</label>
        <input 
          type='text' 
          id='username_input'
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

