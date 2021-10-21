import { useState } from "react";
import { useLocation } from "react-router";
import { handleError } from "./utils/api";



export const NoMatch = () => {

  const {pathname} = useLocation()
  const [responseStatus, setResponseStatus] = useState();

  useState(() => {
    handleError(pathname)
    .then((response) => {
      setResponseStatus(response.response.status)
    })
  })

  const imageUrl = `https://http.cat/${responseStatus}`

  return (

    <img className='error_image'src={imageUrl} alt="error response"></img>
  )
}