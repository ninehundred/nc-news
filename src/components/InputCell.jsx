export const InputCell = ({userInfo, edit, setUserInfo}) => {

  const handleChange = (event) => {
    const body = event.target.name;
    const value = event.target.value;

  }

  if (!edit) {
    return (
      <>
      username: {userInfo ? userInfo.username : ''} 
      </>
    )
  } else {
    return (
      <>
      <input type="text" 
             id="fname" 
             name="fname"
             placeholder={userInfo ? userInfo.username : ''}
             onChange={handleChange}></input>
      </>
    )
  }
  

  

}