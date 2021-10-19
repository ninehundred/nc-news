import {useState } from "react";

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  return {isLoading, setIsLoading};
}