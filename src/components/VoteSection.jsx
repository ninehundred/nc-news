import { BtnVote } from "./BtnVote";
import { useHasVoted } from "../hooks/useHasVoted";
import { useVote } from "../hooks/useVote";
import { useEffect } from "react";

export const VoteSection = ({ itemVotes, itemId, itemType }) => {

  const { hasVoted, setHasVoted } = useHasVoted(0)
  const {currentVotes, setCurrentVotes} = useVote(0);

  useEffect(() => {
    setCurrentVotes(itemVotes)
  }, [itemVotes, setCurrentVotes])

  return (
    <section className='vote_section'>
        <span> 
          <BtnVote currentVotes={currentVotes} 
                    setCurrentVotes={setCurrentVotes} 
                    itemVotes={itemVotes}
                    buttonValue={1}
                    hasVoted={hasVoted}
                    setHasVoted={setHasVoted}
                    itemId={itemId}
                    itemType={itemType}
                    />
        
        <BtnVote currentVotes={currentVotes} 
                    setCurrentVotes = {setCurrentVotes} 
                    itemVotes={itemVotes}
                    buttonValue={-1}
                    hasVoted={hasVoted}
                    setHasVoted={setHasVoted}
                    itemId={itemId}
                    itemType={itemType}
                    />
        </span>
      <span className='votes_text' >votes: {currentVotes}</span>
    </section>
  )
}