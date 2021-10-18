import { useEffect, useState } from "react";
import Article from "./Article";
import { getArticles } from "./utils/api";

import '../styles/articles-list.css';


export const ArticleList = () => {

  const [articles, setArticles] = useState({});

  useEffect(() => {
    getArticles()
    .then(articles => {
      setArticles(articles)
    })
  },[setArticles])

  return (
    <section className="articles_list_container">
      
      <section className="articles_header">
        <h4>You saw it here first</h4>
      </section>
      
      <section className="articles_list">
        <Article articles={articles}/>
      </section>

      

    </section>
  )
}