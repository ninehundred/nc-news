import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "./utils/api";

export const Comments = ({article_id}) => {

  const [comments, setComments] = useState([]);
  // TODO - add loading state
  // TODO - add reply button (would mean additional back end work)
  // TODO - nchelp regarding item keys...not sure where error coming from??
  // TODO - comments should be sortable by votes (asc desc)


  useEffect(() => {
    getCommentsByArticleId(article_id)
    .then(comments => {
      setComments(comments)
    })
  }, [article_id])

  // if is loading show loading screen...
  return (
    <section className='comments_section'>
      <ul className='comments_ul'>
        {comments.map(comment => {
          return (
            <li key={comments.comment_id} className='comment_item'>
              <p className='comment_body'>{comment.body}</p>
              <p className='comment_author'>author: {comment.author}</p>
              <p className='comment_date'>date created: {comment.created_at}</p>
              <p className='comment_votes'>votes: {comment.votes}</p>       
            </li>
          )
        })}
      </ul>
    </section>
    
    
  )

}