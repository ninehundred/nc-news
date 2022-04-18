import { useEffect, useState } from "react";
import { getArticleById } from "./utils/api";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { CommentsList } from "./CommentsList";
import { useLoading } from "../hooks/useLoading";
import '../styles/comments-list.css'
import '../styles/article.css'
import { VoteSection } from "./VoteSection";
import { convertToLocal } from "./utils/dateTime";

export const Article = () => {

  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    getArticleById(article_id)
    .then(article => {
      // set article object with info for rendering
      //TODO: would be nice for this to ask for your own local date first...
      const localDate = convertToLocal(article.created_at, 'en-GB')
      setArticle({...article, created_at: localDate});
      // set vote counter object to article votes for dynamic rendering
      setIsLoading(false);
    })
  },[setIsLoading, article_id])

  if (isLoading) return <section className='loading'>LOADING...</section>
  return (
    <section className="article_single">

      <section className="article_text">
        <h1>{article.title}</h1>
        <h4>author: {article.author}</h4>
        <h4>created: {article.created_at}</h4>
        
        <h4>topic: {article.topic}</h4>
        <section className='article_body'>{article.body}</section>
      </section>
      <VoteSection itemVotes={article.votes} itemId={article.article_id} itemType='articles'/>
      <Link to={`/`}>
        <button type='button' className='home_button'>home</button>
      </Link>
      
      <section className='comments_header'>
        comments
      </section>

      <section className='comments_list'>
        <CommentsList article_id={article_id}/>
      </section>
    </section>
  )
}