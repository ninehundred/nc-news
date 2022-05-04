import '../styles/account.css';
import { ReqLoginAccountPage } from '../wrappers/RequiresLogin';
import { useState, useEffect } from 'react';
import { getUser } from './utils/api';
import { useLoading } from "../hooks/useLoading";

import { InputToggle } from './InputToggle';


export const Account = () => {
  
  let [userInfo, setUserInfo] = useState({});
  const {isLoading, setIsLoading} = useLoading()

  useEffect( () => {
    let username = sessionStorage.getItem('username')
    setIsLoading(true);
    getUser({username: username})
    .then(data => {
      setUserInfo({...data.user})
      setIsLoading(false);
    })
  }, [setIsLoading])

  if (isLoading) return <section className='loading'>LOADING...</section>
  return (
    <ReqLoginAccountPage>
        <section className='account_section'>
        <h1> 
          Account
        </h1>
          <img src={userInfo ? userInfo.avatar_url : ''} alt="user avatar"></img>
        <p>
          <section>
              <InputToggle elementName={'username'} 
                          setUserInfo={setUserInfo} 
                          userInfoValue={userInfo.username}
                          userInfo={userInfo}/> 
          </section>
          <section>
              <InputToggle elementName={'name'} 
                          setUserInfo={setUserInfo} 
                          userInfoValue={userInfo.name}
                          userInfo={userInfo}/> 
          </section>
        </p>
        
      </section>
    </ReqLoginAccountPage>
      
   
  )
}

