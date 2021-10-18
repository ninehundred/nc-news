import { useEffect, useState } from "react";
import Article from "./Article";
import { getArticles } from "./utils/api";

import '../styles/articles-list.css';

export const ArticleList = () => {

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    getArticles()
    .then(articles => {
      setArticles(articles)
      setIsLoading(false);
    })
  },[setIsLoading]) // is it because im getting this to run with setArticles previously????

  console.log(articles)
  if (isLoading) return <section className='loading'>LOADING...</section>

  return (
    <section className="articles_list_container">

      <section className="articles_header">
        <h4>You saw it here first</h4>
      </section>
      
      <section className="articles_list">
        <Article articles={articles} isLoading={isLoading}/>
      </section>

      <section className='comments_section'>
        comments seciton here
      </section>

      

    </section>
  )
}