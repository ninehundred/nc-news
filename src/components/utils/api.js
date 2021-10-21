import axios from  'axios'

// TODO - sort out the back end to accept queries.
// const listApi = axios.create({baseURL:`https://do-news-server.herokuapp.com/api`})


const listApi = axios.create({baseURL:`https://be-nc-news-testing.herokuapp.com/api`})

export const getArticles = (topic) => {
  let queryString = `articles`
  if (topic !== '/') queryString += `?topic=${topic}`
  // if theres a sort by also add '&sortby=asc/desc'
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

export const patchArticleVotes = (article_id, incVotes) => {
  return listApi.patch(`/articles/${article_id}`, incVotes)
  .catch(err => {
    return err
  })
}

export const getUser = (username) => {
  return listApi.get(`/users/${username}`)
  .then( ( { data } ) => {
    //console.log(data)
    return data
  })
  .catch(err => {
    // if user not found return not found
    // else return something went wrong
  })
}


export const postArticleComment = (article_id, comment) => {
  console.log('input article id and comment\n', article_id, comment)
  return listApi.post(`/articles/${String(article_id)}/comments`, comment)
  ///api
  .then( ( {data} ) => {
    console.dir(data)
  })
  .catch(err => {
    console.dir(err)
  })
}


