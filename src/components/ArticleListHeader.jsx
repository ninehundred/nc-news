import { useEffect, useState } from "react";
import { getAllTopics } from "./utils/api";

export const ArticleListHeader = ({ setTopic }) => {

  const [topics, setTopics] =useState([])

  useEffect( () => {
    getAllTopics()
    .then(topics => {
        setTopics(topics)
        //TODO implement a custom loading hook
    })
  }, [setTopics])

  useEffect( () => {

  })

  return (
    <section className="articles_header">
      <h4>this is the news...</h4>
      <select name="topics" id="topics" className='topic_select_menu' onChange={(event) => {
        event.preventDefault();
        setTopic(event.target.value);
      }}>
        {topics.map(topic => {
          return (
            <option key={topic.slug} value={topic.slug}>{topic.slug}</option>
          )
        })}
      </select>
    </section>
  )
}