import { patchArticleVotes } from "./utils/api";



import { useParams } from "react-router";


export const BtnVote = ( {articleVotes, 
                          currentVotes, 
                          setCurrentVotes, 
                          buttonValue,
                          hasVoted,
                          setHasVoted } ) => {

  const { article_id } = useParams();
 
  const handleVote = (buttonValue) => {
    let incVotes = { inc_votes: articleVotes }
    // if vote is upvote
    setCurrentVotes(currentVotes + buttonValue)
    setHasVoted(hasVoted + buttonValue)
    incVotes = { inc_votes: buttonValue }
    patchArticleVotes(article_id, incVotes)
  }

  const voteSymbol = buttonValue === 1 ? '⬆️' : '⬇️' ;

  let disableButton = hasVoted === buttonValue ? true : false;
  
  console.log(hasVoted)
  
  return (
    <button 
    disabled={disableButton}
    type='button'
    className='vote_button' 
    value={buttonValue} 
    onClick={() => handleVote(buttonValue)}
    >{voteSymbol}</button>
  )
}

