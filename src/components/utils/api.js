import axios from  'axios'
import { AxiosResponse, AxiosError } from 'axios'

const listApi = axios.create({baseURL:`https://do-news-server.herokuapp.com/api`})

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
  return listApi.get(`${queryString}`)
  .then(({data}) => {
    return data.articles;
  })
}

export const getArticleById = (article_id) => {
  return listApi.get(`/articles/${article_id}`)
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

  return listApi.get(queryString)
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
  return listApi.patch(`/${voteItemOrigin}/${itemId}`, body)
  .catch(err => {
    console.dir(err)
    return err
  })
}

export const getUser = (username) => {
  return listApi.get(`/users/${username}`)
  .then( ( { data } ) => {
    return data
  })
  .catch(err => {
    console.log('there has been an error with the user')
  })
}

export const postArticleComment = (article_id, comment) => {
  return listApi.post(`/articles/${String(article_id)}/comments`, comment)
  .then( ( {data} ) => {
    //console.log('article posted to db')
  })
  .catch(err => {
    console.dir(err.response)
    console.dir(err.response.status)
    console.dir(err.response.headers)
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


