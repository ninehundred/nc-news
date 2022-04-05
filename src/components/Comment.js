import { useEffect, useState } from "react";
//import PostComment from './PostComment.jsx'
import { VoteSection } from "./VoteSection";
import { ReqLoginVote } from "../wrappers/RequiresLogin";
import { convertToLocal } from "./utils/dateTime";
import '../styles/comments-list.css'


export const Comment = ({ commentData }) => {

  //const { currentVotes, setCurrentVotes } = useVote();

  const [avatarURL, setAvatarURL] = useState("https://picsum.photos/200");

  // TODO - comments should be sortable by votes, date (asc, desc)
  // NICETOHAVE - add reply button (would mean additional back end work)

  useEffect(() => {
    // get users avatar
    // set the users avatar
  }, [])
  //if (isLoading) return <section className='loading'>LOADING...</section>
  return (
    <li key={commentData.comment_id} className='comment_item'>
      <section>
        <img className="avatar_img" src={avatarURL} alt="stock"/>
        <p className='comment_author'>{commentData.author}</p>
      </section>
      <section>
        <p className='comment_body'>{commentData.body}</p>
        <p className='comment_date'>created: {
        convertToLocal(commentData.created_at, 'en-GB')
        }</p>
      </section>
      <ReqLoginVote>
        <VoteSection itemVotes={commentData.votes} itemId={commentData.comment_id} itemType='comments'/>
      </ReqLoginVote>
    </li>
  )

}