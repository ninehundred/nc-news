import { patchItemVotes } from "./utils/api";


export const BtnVote = ( {itemVotes, 
                          currentVotes, 
                          setCurrentVotes, 
                          buttonValue,
                          hasVoted,
                          setHasVoted,
                          itemId,
                          itemType } ) => {
 
  const handleVote = (buttonValue) => {
    let inc_votes = { inc_votes: itemVotes }
    setCurrentVotes(currentVotes + buttonValue)
    setHasVoted(hasVoted + buttonValue)
    inc_votes = { inc_votes: buttonValue }
    patchItemVotes(itemId, itemType, inc_votes)
  }

  const voteSymbol = buttonValue === 1 ? '⬆️' : '⬇️' ;

  let disableButton = hasVoted === buttonValue ? true : false;
  
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

