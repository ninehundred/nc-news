import { useState } from "react";

export const useVote = (startVotes = 0) => {
  const [votes, setVotes] = useState(startVotes);
  return {votes, setVotes};
}