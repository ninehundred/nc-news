import { useState } from "react";

export const useVote = (startVotes = 0) => {
  const [currentVotes, setCurrentVotes] = useState(startVotes);
  return {currentVotes, setCurrentVotes};
}