import { useEffect, useState } from "react";
import Article from "./ArticleItem";
import { getArticles } from "./utils/api";

import '../styles/articles-list.css';

export const ArticleList = ({ isLoading, setIsLoading }) => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles()
    .then(articles => {
      setArticles(articles)
      setIsLoading(false);
    })
  },[setIsLoading])

  if (isLoading) return <section className='loading'>LOADING...</section>
  return (
    <section className="articles_list_container">

      <section className="articles_header">
        <h4>its news... really!</h4>
      </section>
      
      <section className="articles_list">
        <Article articles={articles} isLoading={isLoading}/>
      </section>

    </section>
  )
}