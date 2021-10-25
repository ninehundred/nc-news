import { useEffect, useState } from "react";
import { getArticleById } from "./utils/api";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Comments } from "./Comments";
import { useLoading } from "../hooks/useLoading";
import '../styles/comments-list.css'
import '../styles/article.css'
import { ReqLoginArticleVote } from "../wrappers/RequiresLogin";
import { VoteSection } from "./VoteSection";

export const Article = () => {

  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    getArticleById(article_id)
    .then(article => {
      // set article object with info for rendering
      setArticle(article)
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
        <h4>created at: {article.created_at}</h4>
        <h4>topic: {article.topic}</h4>
        <section className='article_body'>{article.body}</section>
      </section>

      <ReqLoginArticleVote>
        <VoteSection itemVotes={article.votes} itemId={article.article_id} itemType='articles'/>
      </ReqLoginArticleVote>

      <Link to={`/`}>
        <button type='button' className='home_button'>home</button>
      </Link>
      

      <section className='comments_header'>
        comments
      </section>

      <section className='comments_list'>
        <Comments article_id={article_id}/>
      </section>
    </section>
  )
}