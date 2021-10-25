import axios from  'axios'
import { AxiosResponse, AxiosError } from 'axios'

// TODO - sort out the back end to accept queries.
// const listApi = axios.create({baseURL:`https://do-news-server.herokuapp.com/api`})

const listApi = axios.create({baseURL:`https://be-nc-news-testing.herokuapp.com/api`})

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
    return data.article;
  })
}

export const getCommentsByArticleId = (article_id) => {
  return listApi.get(`/articles/${article_id}/comments`)
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

export const patchArticleVotes = (article_id, incVotes) => {
  return listApi.patch(`/articles/${article_id}`, incVotes)
  .catch(err => {
    return err
  })
}

export const getUser = (username) => {
  return listApi.get(`/users/${username}`)
  .then( ( { data } ) => {
    return data
  })
  .catch(err => {
    // TODO - redirect to my error page?
  })
}

export const postArticleComment = (article_id, comment) => {
  //console.log('input article id and comment\n', article_id, comment)
  return listApi.post(`/articles/${String(article_id)}/comments`, comment)
  ///api
  .then( ( {data} ) => {
  })
  .catch(err => {
    //console.dir(err)
    //TODO - should i to my error page here?
  })
}

export const handleError = (pathname) => {
  return listApi.get(`${pathname}`)
  .then((response: AxiosResponse) => {
    console.log('nothing to see here')
  })
  .catch((reason: AxiosError) => {
    const response = reason.response;
    const message = reason.message;
    return({response, message})
  })
}


