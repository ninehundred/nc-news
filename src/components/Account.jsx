import '../styles/account.css';
import { ReqLoginAccountPage } from '../wrappers/RequiresLogin';
import { useState, useEffect } from 'react';
import { getUser } from './utils/api';
import { useLoading } from "../hooks/useLoading";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { InputCell } from './InputCell';


export const Account = () => {
  
  let [userInfo, setUserInfo] = useState({});
  const [edit, setEdit] = useState(false)
  // const [error, setError] = useState(false);


  const {isLoading, setIsLoading} = useLoading()

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setFormInput(values => ({...values, [name]: value }))
  // }
  const editMode = (event) => {
    setEdit(!edit)
    //bunch of checks
    // then we need to edit our back end
    // then we need to send this off to the back end
    // not sure if want to optimistically render....
    // probs want to make sure username is available first with a check?
  }

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
        {/* this thing needs to take in the state username and editMode ... */}
          <img src={userInfo ? userInfo.avatar_url : ''} alt="user avatar"></img>
        <p>
          <InputCell 
            userInfo={userInfo} 
            edit={edit} 
            setUserInfo={setUserInfo}/>
          {/* should have used a button with an icon here... */}
          <button onClick={event => editMode()}>
            { !edit ? 
              <FontAwesomeIcon icon="fa-solid fa-lock" /> : 
              <FontAwesomeIcon icon="fa-solid fa-lock-open" />}
          </button>
          
        </p>
      </section>
    </ReqLoginAccountPage>
      
   
  )
}

