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
    const value = event.target.value;
    setTopicQuery(values => ({...values, [name]: value}))
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

      <select name='sort_by'
              id='article_sort_menu'
              className='topic_select_menu'
              onChange={(event) => {handleChange(event)}}
              value={topicQuery.sort_by}
              >
        <option value="none" defaultValue hidden >sort by</option>
        <option key='created01' value='created_at'>date created</option>
        <option key='commentCount01' value='comment_count'>comment count</option>
        <option key='title01' value='title'>title</option>
        <option key='votes01' value='votes'>votes</option>
        <option key='topics01' value='topic'>topic</option>

      </select>

      <select name='order'
              id='article_order_by'
              className='topic_select_menu'
              onChange={(event) => {handleChange(event)}}
              value={topicQuery.order}
              >
        <option value="none" defaultValue hidden >order</option>
        <option key='asc1' value='asc'>ascending</option>
        <option key='desc1' value='desc'>descending</option>

      </select>
      
    </section>
  )
}