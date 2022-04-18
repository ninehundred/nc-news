import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "./utils/api";
import { useLoading } from "../hooks/useLoading";
import PostComment from './PostComment.jsx'
import { Comment } from "./Comment";
import '../styles/comments-list.css'


export const CommentsList = ({article_id}) => {

  const [comments, setComments] = useState([]);
  const {isLoading, setIsLoading} = useLoading()
  const [topicQuery, setTopicQuery] = useState({topic: '', 
                                                sort_by: '', 
                                                order: ''})
  //const { currentVotes, setCurrentVotes } = useVote();

  // TODO - comments should be sortable by votes, date (asc, desc)

  useEffect(() => {
    setIsLoading(true);
    getCommentsByArticleId(article_id, topicQuery)
    .then(comments => {
      
      setComments(comments)
      //setCurrentVotes(comments.votes)
      setIsLoading(false)
    })
  }, [article_id, setIsLoading])


  if (isLoading) return <section className='loading'>LOADING...</section>

  return (
    <section className='comments_section'>
      <PostComment articleId={article_id} comments={comments} setComments={setComments}/>
      <ul className='comments_ul'>
        {comments.map(comment => {
          return <Comment key={comment.comment_id} commentData={comment} />
        })}
      </ul>
    </section>
  )
}