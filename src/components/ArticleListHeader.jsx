import { useEffect, useState } from "react";
import { getAllTopics } from "./utils/api";
import { useLoading } from "../hooks/useLoading";

export const ArticleListHeader = ({ topicQuery, setTopicQuery }) => {

  const [topics, setTopics] =useState([]);
  const {isLoading, setIsLoading} = useLoading();

  useEffect( () => {
    setIsLoading(true);
    getAllTopics()
    .then(topics => {
      const defaultAll = {slug: '', description: 'N/A - default all topics'}
      setTopics([defaultAll,...topics ])
      setIsLoading(false);
    })
  }, [setIsLoading])

  const handleChange = (event) => {
    const name = event.target.name;
    console.log('the name is....\n', name)
    const value = event.target.value;
    setTopicQuery(values => ({...values, [name]: value}))
    //console.log('about to set the selected option to\n', value)
  }
  
  if (isLoading) return <section className='loading'>LOADING...</section>
  return (
    <section className="articles_header">
      <h4>this is the news...</h4>

      <select name="topic" 
              id="topic" 
              className='topic_select_menu' 
              onChange={(event) => {handleChange(event)}}
              value={topicQuery.topic}
      >
        {topics.map(topic => {
          const menuTopic = topic.slug;
          if (topic.slug === '') return <option key={menuTopic} value={menuTopic}>all</option>
          else return <option key={menuTopic} value={menuTopic}>{menuTopic}</option>
        })}
      </select>

      
    </section>
  )
}