import { useEffect, useState } from "react";
import Article from "./ArticleListItem";
import { getArticles } from "./utils/api";

import '../styles/articles-list.css';
import { ArticleListHeader } from "./ArticleListHeader";
import { useLoading } from "../hooks/useLoading";

export const ArticleList = () => {

  const [articles, setArticles] = useState([]);
  const [topicQuery, setTopicQuery] = useState({start: '/articles', 
                                                topic: '', 
                                                sort_by: '', 
                                                order: ''})
  const {isLoading, setIsLoading} = useLoading()

  useEffect(() => {
    setIsLoading(true)
    getArticles(topicQuery)
    .then(articles => {
      setArticles(articles)
      setIsLoading(false);
    })
  },[setIsLoading, topicQuery])

  if (isLoading) return <section className='loading'>LOADING...</section>
  return (
    <section className="articles_list_container">

      <ArticleListHeader articles={articles} topicQuery={topicQuery} setTopicQuery={setTopicQuery}/>
      
      <section className="articles_list">
        <Article articles={articles} isLoading={isLoading}/>
      </section>

    </section>
  )
}