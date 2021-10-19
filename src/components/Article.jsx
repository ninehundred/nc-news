import { useEffect, useState } from "react";
import { getArticleById } from "./utils/api";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Comments } from "./Comments";
import { useLoading } from "../hooks/useLoading";
import '../styles/comments-list.css'
import '../styles/article.css'



export const Article = () => {

  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const {isLoading, setIsLoading} = useLoading();

  useEffect(() => {
    getArticleById(article_id)
    .then(article => {
      setArticle(article)
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
        <section>{article.body}</section>
        <Link to={`/`}>
          <button type='button' className='home_button'>home</button>
        </Link>
      </section>
      

      <section className='comments_header'>
        comments
      </section>

      <section className='comments_list'>
        <Comments article_id={article_id}/>
      </section>
    </section>
  )
}