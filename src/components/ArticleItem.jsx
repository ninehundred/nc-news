import { Link } from "react-router-dom";

const ArticleItem = ({ articles }) => {
  return (
    <ul className='article_ul'>
      {articles.map(article_item => {
        return (
          <li key={article_item.article_id} className='article_card'>
            <h4>
              {article_item.title}
            </h4>
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
            <Link to={`/articles/${article_item.article_id}`}>
              <button type='button' className='read_more_button'>read more...</button>
            </Link>
            
          </li>
        )
      })}
    </ul>
  )
}

export default ArticleItem;