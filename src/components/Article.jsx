import { useEffect, useState } from "react";
import { getArticleById } from "./utils/api";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Comments } from "./Comments";
import { useLoading } from "../hooks/useLoading";
import { useVote } from "../hooks/useVote";
import axios from  'axios'
import '../styles/comments-list.css'
import '../styles/article.css'



export const Article = () => {

  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const {isLoading, setIsLoading} = useLoading();
  const { votes, setVotes } = useVote();

  useEffect(() => {
    getArticleById(article_id)
    .then(article => {
      setArticle(article)
      setVotes(article.votes)
      setIsLoading(false);
    })
  },[setIsLoading, setVotes, article_id])


  const handleVote = (event) => {
    const voteVal = event.target.value;
    if (voteVal === '>') setVotes(votes + 1);
    if (voteVal === '<') setVotes(votes -1);
    axios.patch(`https://be-nc-news-testing.herokuapp.com/api/articles/${article_id}`, { inc_votes: votes })
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    })
    // this is where we now send back to db.....
  }

  

  if (isLoading) return <section className='loading'>LOADING...</section>
  return (
    <section className="article_single">

      <section className="article_text">
        <h1>{article.title}</h1>
        <h4>author: {article.author}</h4>
        <h4>created at: {article.created_at}</h4>
        <h4>topic: {article.topic}</h4>
        <section>{article.body}</section>
      </section>

      <section className='vote_section'>
        
          <span>
            <span>
              <button 
                type='button'
                className='vote_button' 
                value={'>'} 
                onClick={(event) => handleVote(event)}
                >⬆️</button>
            </span>
            <span>
            <button 
              type='button'
              className='vote_button' 
              value={'<'} 
              onClick={(event) => handleVote(event)}
              >⬇️</button>
            </span>
          </span>
          <span>votes: {votes}</span>
        </section>

      
      <Link to={`/`}>
        <button type='button' className='home_button'>home</button>
      </Link>
      

      <section className='comments_header'>
        comments
      </section>

      <section className='comments_list'>
        <Comments article_id={article_id}/>
      </section>
    </section>
  )
}