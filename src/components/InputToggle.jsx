import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ErrorMessage } from './ErrorMessage';
import { patchUserInfo } from './utils/api';

export const InputToggle = ({elementName, 
                             setUserInfo, 
                             userInfoValue,
                             userInfo}) => {
           
  const [new_info, setNewInfo] = useState({})
  const [edit, setEdit] = useState(false)
  const [error, setError] = useState({});

  const handleChange = (event) => {
    const elementValue = event.target.value;
    if (elementValue.length < 6) setError({...error, usernameLength: 'username too short'})
    else if (elementValue.length >= 6 ){
      const removedUsername = {...error}
      delete removedUsername.usernameLength;
      setError(removedUsername)
    }
    setNewInfo({[elementName]: elementValue});
  }

  const handleLock = (event) => {
    if(edit === false) {
      setEdit(!edit)
    } else {
      // check for possible erronious input
      if (!error.usernameLength) {
        //TODO: check that the user has actually changed something...
        patchUserInfo({username: userInfo.username, new_info})
        setUserInfo({...userInfo, ...new_info}) 
        setEdit(!edit)
      }
    }
  }

  return (
    <>
      { !edit ? 
        <> {elementName}: {userInfoValue} </> : 
        <input type="text" 
            id="name" 
            name={elementName}
            placeholder='new username...'
            onChange={handleChange}></input>
      } 
      <button onClick={event => handleLock()}>
              { !edit ? 
                <FontAwesomeIcon icon="fa-solid fa-lock" /> : 
                <FontAwesomeIcon icon="fa-solid fa-lock-open" />}
            </button>
      {error.usernameLength ? <ErrorMessage error={error.usernameLength}/> : <></>}

      {error.usernameSpace ? <ErrorMessage error={error.usernameSpace}/> : <></>}
      </>
    )
  }