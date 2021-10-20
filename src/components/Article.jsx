import { useEffect, useState } from "react";
import { getArticleById, patchArticleVotes } from "./utils/api";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Comments } from "./Comments";
import { useLoading } from "../hooks/useLoading";
import { useVote } from "../hooks/useVote";
import '../styles/comments-list.css'
import '../styles/article.css'



export const Article = () => {

  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const {isLoading, setIsLoading} = useLoading();
  const { currentVotes, setCurrentVotes } = useVote();

  useEffect(() => {
    getArticleById(article_id)
    .then(article => {
      // set article object with info for rendering
      setArticle(article)
      // set vote counter object to article votes for dynamic rendering
      setCurrentVotes(article.votes)
      setIsLoading(false);
    })
  },[setIsLoading, article_id, setCurrentVotes])

  const handleVote = (event) => {
    // get up or down vote from event value 
    const upOrDown = event.target.value;
    // make object to store votes for sending to db
    let incVotes = {inc_votes: article.votes}
    // if vote is upvote
    if (upOrDown === '>') {
      // increase the votes in the db (db handles increment since patch)
      incVotes = { inc_votes: 1 }
      // increase the votes in the state (which when refreshed will read back to db anyway)
      setCurrentVotes(currentVotes + 1)
    }
    // if vote is downvote
    else if (upOrDown === '<') {
      // decrease votes in db
      incVotes = { inc_votes: -1 }
      // decrease votes in state (most current displayed)
      setCurrentVotes(currentVotes - 1)
    }
    patchArticleVotes(article_id, incVotes)
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
          <span>votes: {currentVotes}</span>
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