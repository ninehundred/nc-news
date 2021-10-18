

const Article = ({articles}) => {
  return (
    articles.map(article => {
      return (
        <section key={article.article_id} className='article_item'>
          <h5>{article.title}</h5>
        </section>
      )
    })
  )
}

export default Article;