import '../styles/login.css';
import { ReqLoginAccountPage } from '../wrappers/RequiresLogin';
import { useState, useContext, useEffect } from 'react';
import { getUser } from './utils/api';
import { useLoading } from "../hooks/useLoading";
import { ErrorMessage } from './ErrorMessage';



export const Account = () => {
  
  const [userInfo, setUserInfo] = useState();
  const [formInput, setFormInput] = useState({username: ''});
  const [error, setError] = useState(false);


  const {isLoading, setIsLoading} = useLoading()

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormInput(values => ({...values, [name]: value }))
  }

  useEffect( () => {
    let username = sessionStorage.getItem('username')
    setIsLoading(true);
    getUser(username)
    .then( data => {
      setUserInfo({...data.user})
      setIsLoading(false);
    })
  }, [setIsLoading])

  const updateUserInfo = (event) => {
    event.preventDefault();
    // will need patch request to update user info
  }


  // basically want an uneditable form but if they click the
  // pencil they can edit it.

  return (
    <ReqLoginAccountPage>
        <section className='account_section'>
        <h1> 
          Account
        </h1>
        <form id='user_info_form' className='user_info_form' onSubmit={updateUserInfo} >
        <input 
          type='text' 
          id='username_input'
          className='username_input'
          name='username' 
          placeholder={userInfo ? userInfo.username : ''}
          onChange={handleChange} 
          required/>
        <input 
          type='text' 
          id='avatar_url_input'
          className='username_input'
          name='avatar_url' 
          placeholder={userInfo ? userInfo.avatar_url : ''}
          onChange={handleChange} 
          required/>




          { error ? <ErrorMessage error={error}/> : null }  
        <input type='submit' className='login_submit' value='Submit'/>
      </form>
      </section>
    </ReqLoginAccountPage>
      
   
  )
}

