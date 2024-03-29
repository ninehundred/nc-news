import '../styles/login.css';
import { UserContext } from '../wrappers/UserContext';
import { ReqLoginLoginPage } from '../wrappers/RequiresLogin';
import { useState, useContext } from 'react';
import { postUser } from './utils/api';
import { ErrorMessage } from './ErrorMessage';


const SignUp = () => {
  const { setUser } = useContext(UserContext)
  const [formInput, setFormInput] = useState(null);
  const [error, setError] = useState({});

  const handleChange = (event) => {
    const inputValue = event.target.value;
    const elementName = event.target.name;

    if (elementName ==='username') {
      if(inputValue.length < 6) {
        setError({...error, username: 'username too short'})
      } else {
        const removedUsername = {...error}
        delete removedUsername.username;
        setError(removedUsername)
      }
    } 
    
    if (elementName === 'name') {
      if (inputValue.includes(' ')) {
        setError({...error, name_input: 'no spaces allowed'})
      } else {
        const removedName = {...error}
        delete removedName.name_input;
        setError(removedName)
      } 
    }
    
    if (elementName === 'avatar_url') {
      // check for invalid url with regex
      const urlRegex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
      if (!urlRegex.test(inputValue)) {
        setError({...error, avatar_url: 'invalid url'})
      } else {
        const removedName = {...error}
        delete removedName.avatar_url;
        setError(removedName)
      }     
    }
    
    if (elementName === 'password') {

      if(inputValue.length < 5) {
        setError({...error, password: 'password too short'})
      } else {
        const removedPassword = {...error}
        delete removedPassword.password;
        setError(removedPassword)
      }
    }
    setFormInput(values => ({...values, [elementName]: inputValue }))
  }

  const SignUpSubmit = (event) => {
    event.preventDefault();
    postUser( formInput )
    .then(userData => {
      if (userData) {
        console.log('we made a new user',userData)
        if (userData.username === formInput.username) {
          setUser(userData.username)
          // use session storage (at least) to minimise data leakage
          sessionStorage.setItem('username', userData.username)
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
        Create Account
      </h1>
      <form id='login_form' className='login_form' onSubmit={SignUpSubmit}>

        <input 
          type='text' 
          id='username_input'
          className='username_input'
          name='username' 
          placeholder='pick a username...'
          onChange={handleChange}
          required/>
        { error.username ? <ErrorMessage error={error.username}/> : null }

        <input 
          type='text' 
          id='name_input'
          className='username_input'
          name='name' 
          placeholder='your first name...'
          onChange={handleChange} 
          required/>

        { error.name_input ? <ErrorMessage error={error.name_input}/> : null }
      
        <input 
          type='text' 
          id='avatar_url_input'
          className='username_input'
          name='avatar_url' 
          placeholder='link to your avatar image...'
          onChange={handleChange} 
          required/>
        { error.avatar_url ? <ErrorMessage error={error.avatar_url}/> : null }  

        <input 
          type='text' 
          id='password'
          className='username_input'
          name='password' 
          placeholder='choose a password...'
          onChange={handleChange} 
          required/>
        { error.password ? <ErrorMessage error={error.password}/> : null } 

        <input type='submit' className='login_submit' value='Submit'/>
      </form>
    </section>
    </ReqLoginLoginPage>
  )
}

export default SignUp;

