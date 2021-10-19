import { useEffect, useState } from "react";
import Article from "./ArticleListItem";
import { getArticles } from "./utils/api";

import '../styles/articles-list.css';
import { ArticleListHeader } from "./ArticleListHeader";
import { useLoading } from "../hooks/useLoading";

export const ArticleList = () => {

  const [articles, setArticles] = useState([]);
  const [topic, setTopic] =useState('/')
  const {isLoading, setIsLoading} = useLoading()

  useEffect(() => {
    setIsLoading(true)
    getArticles(topic)
    .then(articles => {
      setArticles(articles)
      setIsLoading(false);
    })
  },[setIsLoading, topic])

  if (isLoading) return <section className='loading'>LOADING...</section>
  return (
    <section className="articles_list_container">

      <ArticleListHeader articles={articles} setTopic={setTopic}/>
      
      <section className="articles_list">
        <Article articles={articles} isLoading={isLoading}/>
      </section>

    </section>
  )
}