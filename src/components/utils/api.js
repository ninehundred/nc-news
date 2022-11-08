import axios from  'axios'
axios.defaults.withCredentials = true;
// import { AxiosResponse, AxiosError } from 'axios'

const listApi = axios.create({baseURL:`https://do-news-server.herokuapp.com/api`})
// const listApi = axios.create({baseURL:`http://localhost:9090/api`})

export const getArticles = (topicQuery) => {
  
  let queryString = '/articles'
  const inputValues = Object.values(topicQuery).filter(x => x !== '')
  const outArray = ['?'];
  if (inputValues.length >= 1) {
    for (const [key, value] of Object.entries(topicQuery)) {
      if (value) {
        outArray.push(`${key}=${value}`)
        outArray.push('&')
      }
    }
    outArray.pop();
    queryString += outArray.join('')
  }
  return listApi.get(`${queryString}`, {withCredentials: true})
  .then(({data}) => {
    return data.articles;
  })
}

export const getArticleById = (article_id) => {
  return listApi.get(`/articles/${article_id}`, {withCredentials: true})
  .then(({data})=> {
    return data.article[0];
  })
}

export const getCommentsByArticleId = (article_id, topicQuery) => {
  //TODO: let this accept queries also. :)
  let queryString = `/articles/${article_id}/comments`
  const inputValues = Object.values(topicQuery).filter(x => x !== '')
  const outArray = ['?'];
  if (inputValues.length >= 1) {
    for (const [key, value] of Object.entries(topicQuery)) {
      if (value) {
        outArray.push(`${key}=${value}`)
        outArray.push('&')
      }
    }
    outArray.pop();
    queryString += outArray.join('')
  }

  return listApi.get(queryString, {withCredentials: true})
  .then(({ data }) => {
    return data.comments;
  })
}

export const getAllTopics = () => {
  return listApi.get(`/topics`)
  .then(({ data }) => {
    return data.topics
  })
}

export const patchItemVotes = (itemId, itemType, body) => {
  const voteItemOrigin = itemType;  
  return listApi.patch(`/${voteItemOrigin}/${itemId}`, body, {withCredentials: true})
  .catch(err => {
    // console.dir(err)
    return err
  })
}

export const getUser = (formInput) => {
  // make sure theres a form input
  return listApi.get(`/users/${formInput.username}`, {withCredentials:true})
  
  .then( ( { data } ) => {
    return data
  })
  .catch(err => {
    console.log('there has been an error with the user:....')
    console.dir(err)
  })
}

export const logIn = (formInput) => {
  return listApi.post(`/users/authenticate`, formInput, {withCredentials:true})
  .then( ({ data }) => {
    return data
  })
  .catch(err => {
    console.log('there has been an error with the user:....')
    console.dir(err)
  })
}



export const postUser = (formInput) => {  
  return listApi.post(`/users`, formInput, {withCredentials:true})
  .then(({ data }) => {
    return data
  })
  .catch(err => {
    // console.dir('there has been an error adding the user')
    console.dir(err)
  })
}

export const postArticleComment = (article_id, comment) => {
  return listApi.post(`/articles/${String(article_id)}/comments`, comment, {withCredentials:true})
  .then( ( {data} ) => {
    //console.log('article posted to db')
  })
  .catch(err => {
    console.dir(err.response)
    console.dir(err.response.status)
    console.dir(err.response.headers)
  })
}

export const patchUserInfo = ( userInfo ) => {
  console.log('about to patch with the following user info...\n', userInfo, {withCredentials: true,})

  return listApi.patch(`/users`, userInfo)
  .then( ( {data} ) => {
    // console.log('success', data)
  })
  .catch(err => {
    console.dir(err)
  })
}



export const handleError = (pathname) => {
  return listApi.get(`${pathname}`)
  .then((response) => {
  })
  .catch((reason) => {
    const response = reason.response;
    const message = reason.message;
    return({response, message})
  })
}


