import '../styles/account.css';
import { ReqLoginAccountPage } from '../wrappers/RequiresLogin';
import { useState, useEffect } from 'react';
import { getUser  } from './utils/api';
import { useLoading } from "../hooks/useLoading";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { InputToggle } from './InputToggle';


export const Account = () => {
  
  let [userInfo, setUserInfo] = useState({});
  // let [editPic, setEditPic] = useState(false)
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

  // const handleEditPic = (event) => {
  //   setEditPic(!editPic)
  // }

  if (isLoading) return <section className='loading'>LOADING...</section>
  return (
    <ReqLoginAccountPage>
        <section className='account_section'>
        <h1> 
          Account
        </h1>
          <div className="edit_image_section">
            < div className="edit_image_overlay">
              <InputToggle elementName={'avatar_url'} 
                        setUserInfo={setUserInfo} 
                        userInfoValue={userInfo.avatar}
                        userInfo={userInfo}/> 
            </div>
            <img 
              src={userInfo ? userInfo.avatar_url : ''} 
              alt="user avatar"
              >
            </img>
          </div>
        <section>
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
        </section>
        
      </section>
    </ReqLoginAccountPage>
      
   
  )
}

