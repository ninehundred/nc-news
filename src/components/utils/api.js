import axios from  'axios'
//import { AxiosResponse, AxiosError } from 'axios'

// TODO - sort out the back end to accept queries.
const listApi = axios.create({baseURL:`https://do-news-server.herokuapp.com/api`})

// const listApi = axios.create({baseURL:`https://be-nc-news-testing.herokuapp.com/api`})

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

export const patchItemVotes = (itemId, itemType, inc_votes) => {
  const voteItemOrigin = itemType;
  return listApi.patch(`/${voteItemOrigin}/${itemId}`, inc_votes)
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
    // TODO - give error on page
  })
}

export const postArticleComment = (article_id, comment) => {
  return listApi.post(`/articles/${String(article_id)}/comments`, comment)
  ///api
  .then( ( {data} ) => {
  })
  .catch(err => {
    //TODO - give error on page
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


