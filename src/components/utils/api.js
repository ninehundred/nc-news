import axios from  'axios'

const listApi = axios.create({baseURL:`https://do-news-server.herokuapp.com/api`})

export const getArticles = () => {
  return listApi.get(`/articles`)
  .then(({data}) => {
    console.log(data.articles)
    return data.articles;
  })
}

