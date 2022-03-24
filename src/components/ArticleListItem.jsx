import { Link } from "react-router-dom";

const ArticleListItem = ({ articles }) => {

  return (
    <ul className='article_ul'>
      {articles.map(article_item => {
        const dateGMT = new Date(article_item.created_at).toLocaleDateString()
        return (
          <li key={article_item.article_id} className='article_card'>
            <header class='card_header'>
            <h4>
              {article_item.title}
            </h4>
            <p className='item_topic'>
              created: {dateGMT }
            </p>
            </header>
            
            <section class='card_body'>
              <p className='item_topic'>
                topic: {article_item.topic}
              </p>
              <p className ='item_author'>
                author: {article_item.author}
              </p>
              <p className='item_comments'>
                comments: {article_item.comment_count}
              </p>
              <p className='item_votes'>
                votes: {article_item.votes}
              </p>
            </section>

            <footer class='card_footer'>
              <Link to={`/articles/${article_item.article_id}`}>
                <button type='button' className='read_more_button'>read more...</button>
              </Link>
            </footer>
          </li>
        )
      })}
    </ul>
  )
}

export default ArticleListItem;