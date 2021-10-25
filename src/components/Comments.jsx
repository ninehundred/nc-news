import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "./utils/api";
import { useLoading } from "../hooks/useLoading";
import PostComment from './PostComment.jsx'
import { VoteSection } from "./VoteSection";
//import { useVote } from "../hooks/useVote";


export const Comments = ({article_id}) => {

  const [comments, setComments] = useState([]);
  const {isLoading, setIsLoading} = useLoading()
  //const { currentVotes, setCurrentVotes } = useVote();

  // TODO - comments should be sortable by votes, date (asc, desc)
  // NICETOHAVE - add reply button (would mean additional back end work)

  useEffect(() => {
    setIsLoading(true);
    getCommentsByArticleId(article_id)
    .then(comments => {
      setComments(comments)
      //setCurrentVotes(comments.votes)
      setIsLoading(false)
    })
  }, [article_id, setIsLoading])

  //console.log(comments)

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
              <p>{comment.votes}</p>
              <VoteSection itemVotes={comment.votes} itemId={comment.comment_id} itemType='comments'/> 
            </li>
          )
        })}
      </ul>
    </section>
    
    
  )

}