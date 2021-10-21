import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "./utils/api";
import { useLoading } from "../hooks/useLoading";
import PostComment from './PostComment.jsx'

export const Comments = ({article_id}) => {

  const [comments, setComments] = useState([]);
  const {isLoading, setIsLoading} = useLoading()

  // TODO - comments should be sortable by votes, date (asc, desc)
  // NICETOHAVE - add reply button (would mean additional back end work)


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
      <PostComment articleId={article_id} comments={comments} setComments={setComments}/>
      <ul className='comments_ul'>
        {comments.map(comment => {
          return (
            <li key={comment.comment_id} className='comment_item'>
              <p className='comment_author'>author: {comment.author}</p>
              <p className='comment_body'>{comment.body}</p>
              <p className='comment_date'>date created: {comment.created_at}</p>
              <p className='comment_votes'>votes: {comment.votes}</p>       
            </li>
          )
        })}
      </ul>
    </section>
    
    
  )

}