import { useEffect, useState } from "react";
import Article from "./ArticleListItem";
import { getArticles } from "./utils/api";

import '../styles/articles-list.css';
import { SortHeader } from "./SortHeader";
import { useLoading } from "../hooks/useLoading";
import { getAllTopics } from "./utils/api";

export const ArticleList = () => {

  const [articles, setArticles] = useState([]);
  const [topicQuery, setTopicQuery] = useState({topic: '', 
                                                sort_by: '', 
                                                order: ''})
  const {isLoading, setIsLoading} = useLoading()
  const [sortedHeadings, setSortedHeadings] = useState([])
  const [filters, setFilters] =useState([]);

  useEffect( () => {
    getAllTopics()
    .then(topics => {
      setFilters(topics.map(x => x.slug).sort())
    })
  }, [])

  useEffect(() => {
    setIsLoading(true)
    getArticles(topicQuery)
    .then(articles => {
      setArticles(articles)
      setSortedHeadings(Object.keys(articles[0]).filter(heading => {
        return !heading.includes('_id') && !heading.includes('body') 
      }).sort())
      setIsLoading(false);
    })
  },[setIsLoading, topicQuery])

  if (isLoading) return <section className='loading'>LOADING...</section>
  return (
    <>
    <section>
    <SortHeader 
        topicQuery={topicQuery} 
        setTopicQuery={setTopicQuery} 
        headerList={sortedHeadings}
        filters={filters}
        />
    </section>
    <section className="articles_list_container">
      
      <section className="articles_list">
        <Article articles={articles} isLoading={isLoading}/>
      </section>
    </section>
    </>
  )
}