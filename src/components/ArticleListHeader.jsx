import { useEffect, useState } from "react";
import { getAllTopics } from "./utils/api";
import { useLoading } from "../hooks/useLoading";

export const ArticleListHeader = ({ setTopic }) => {

  const [topics, setTopics] =useState([]);
  const {isLoading, setIsLoading} = useLoading();

  useEffect( () => {
    setIsLoading(true);
    getAllTopics()
    .then(topics => {
      const defaultAll = {slug: '/', description: 'N/A - default all topics'}
      setTopics([defaultAll,...topics ])
      setIsLoading(false);
    })
  }, [setTopics, setIsLoading])

  useEffect( () => {

  })
  if (isLoading) return <section className='loading'>LOADING...</section>
  return (
    <section className="articles_header">
      <h4>this is the news...</h4>
      <select name="topics" id="topics" className='topic_select_menu' onChange={(event) => {
        event.preventDefault();
        setTopic(event.target.value);
      }}>
        {topics.map(topic => {
          const key = topic.slug;
          const value = topic.slug;
          let text = topic.slug
          if (topic.slug === '/') return <option key={key} value={value}>all</option>
          else return <option key={key} value={value}>{text}</option>
        })}
      </select>
    </section>
  )
}