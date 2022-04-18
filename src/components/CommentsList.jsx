import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "./utils/api";
import { useLoading } from "../hooks/useLoading";
import PostComment from './PostComment.jsx'
import { Comment } from "./Comment";
import { SortHeader } from "./SortHeader";
import '../styles/comments-list.css'


export const CommentsList = ({article_id}) => {

  const [comments, setComments] = useState([]);
  const {isLoading, setIsLoading} = useLoading()
  const [topicQuery, setTopicQuery] = useState({topic: '', 
                                                sort_by: '', 
                                                order: ''})
  const [sortedHeadings, setSortedHeadings] = useState([])

  useEffect(() => {
    setIsLoading(true);
    getCommentsByArticleId(article_id, topicQuery)
    .then(comments => {
      setComments(comments)
      setSortedHeadings(Object.keys(comments[0]).filter(heading => {
        return !heading.includes('_id') && !heading.includes('body')
      }).sort())
      setIsLoading(false)
    })
  }, [article_id, setIsLoading, topicQuery])

  if (isLoading) return <section className='loading'>LOADING...</section>
  return (
    <section className='comments_section'>
      <SortHeader 
        topicQuery={topicQuery} 
        setTopicQuery={setTopicQuery} 
        headerList={sortedHeadings}
        filters={[]}/>
      <PostComment articleId={article_id} comments={comments} setComments={setComments}/>
      <ul className='comments_ul'>
        {comments.map(comment => {
          return <Comment key={comment.comment_id} commentData={comment} />
        })}
      </ul>
    </section>
  )
}