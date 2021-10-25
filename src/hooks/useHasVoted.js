import { useState } from "react";

export const useHasVoted = ( upvt = false, dnvt = false ) => {
  const [hasVoted, setHasVoted] = useState(0);
  return { hasVoted, setHasVoted };
}