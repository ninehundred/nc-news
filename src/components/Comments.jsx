import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "./utils/api";
import { useLoading } from "../hooks/useLoading";

export const Comments = ({article_id}) => {

  const [comments, setComments] = useState([]);
  const {isLoading, setIsLoading} = useLoading()
  // TODO - add loading state
  // TODO - add reply button (would mean additional back end work)
  // TODO - comments should be sortable by votes (asc desc)


  useEffect(() => {
    setIsLoading(true);
    getCommentsByArticleId(article_id)
    .then(comments => {
      setComments(comments)
      setIsLoading(false)
    })
  }, [article_id, setIsLoading])

  if (isLoading) return <section className='loading'>LOADING...</section>
  return (
    <section className='comments_section'>
      <ul className='comments_ul'>
        {comments.map(comment => {
          return (
            <li key={comment.comment_id} className='comment_item'>
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