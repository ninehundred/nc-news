import { useEffect, useState } from "react";
import { getArticleById } from "./utils/api";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import '../styles/article.css';

export const Article = ({ isLoading, setIsLoading }) => {

  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id)
    .then(article => {
      setArticle(article)
      setIsLoading(false);
    })
  },[setIsLoading, article_id])

  console.log(article)

  if (isLoading) return <section className='loading'>LOADING...</section>
  return (
    <section className="article_single">
      <h1>{article.title}</h1>
      <h4>author: {article.author}</h4>
      <h4>created at: {article.created_at}</h4>
      <section>topic: {article.topic}</section>
      <section>{article.body}</section>
      <Link to={`/`}>
        <button type='button' className='read_more_button'>home</button>
      </Link>
    </section>
  )
}