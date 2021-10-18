import axios from  'axios'

const listApi = axios.create({baseURL:`https://do-news-server.herokuapp.com/api`})

export const getArticles = () => {
  return listApi.get(`/articles`)
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



