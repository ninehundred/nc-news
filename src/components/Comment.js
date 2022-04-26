import { useEffect, useState } from "react";
import { VoteSection } from "./VoteSection";
import { ReqLoginVote } from "../wrappers/RequiresLogin";
import { convertToLocal } from "./utils/dateTime";
import '../styles/comments-list.css'
import { getUser } from "./utils/api";


export const Comment = ({ commentData }) => {
  const [avatarURL, setAvatarURL] = useState();
  useEffect(() => {
    getUser({username: commentData.author})
    .then(user => {
      setAvatarURL(user.user.avatar_url)
    })
  }, [commentData.author])

  return (
    <li key={commentData.comment_id} className='comment_item'>
      <section>
        <img className="avatar_img" src={avatarURL} alt="stock"/>
        <p className='comment_author'>{commentData.author}</p>
        <p>comment id {commentData.comment_id}</p>
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