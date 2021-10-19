import axios from  'axios'

// TODO - sort out the back end to accept queries.
// const listApi = axios.create({baseURL:`https://do-news-server.herokuapp.com/api`})


const listApi = axios.create({baseURL:`https://be-nc-news-testing.herokuapp.com/api`})

export const getArticles = (topic) => {
  let queryString = `articles`
  if (topic !== '/') queryString += `?topic=${topic}`
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
  ///api/articles?topic=coding
  return listApi.get(`/topics`)
  .then(({ data }) => {
    return data.topics
  })
}


