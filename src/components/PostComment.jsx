import '../styles/login.css';
import { UserContext } from '../wrappers/UserContext';
import { useState, useContext } from 'react';
import { postArticleComment } from './utils/api';

const PostComment = ({articleId, comments, setComments}) => {
  const { isLoggedIn } = useContext(UserContext)
  const [comment, setComment] = useState({body: '', username: ''});

  const handleChange = (event) => {
    if (isLoggedIn) {
      const body = event.target.name;
      const value = event.target.value;
      //const currentUser = sessionStorage.getItem('username');

      setComment({[body]: value })
      const liElements = document.querySelectorAll("p[id^='error_message']");
          if (liElements.length > 0) {
            liElements[0].remove();
          }

    } else {
      const commentError = document.getElementById('error_message')
      if (!commentError) {
        const errorNode = document.createElement("p"); 
        errorNode.innerHTML = 'please log in to post!'
        errorNode.classList.add('error_message')
        errorNode.setAttribute('id', 'error_message'); 
        const userNameInputNode = document.getElementById('comment_input')  
        userNameInputNode.insertAdjacentElement('afterend', errorNode )
      } 
    }
  }


  const postComment = (event) => {
    event.preventDefault();
    if (isLoggedIn) {
      const currentUser = sessionStorage.getItem('username');
      //setComment(values => ({...values, username: currentUser }))
      const currentDateTime = new Date().toISOString();
      const optimisticComment = {
        author: currentUser,
        body: comment.body,
        comment_id: 'temp',
        created_at: currentDateTime,
        votes: 0
      }
      setComments([...comments, optimisticComment])
      // after comment set go ahead and post to comments db.
      const postComment = {...comment}
      postComment.username = currentUser;
      postArticleComment(articleId, postComment)
    } 
  }

  return (
      <section className='post_comment_section'>
      <form id='comment_form' className='comment_form' onSubmit={postComment}>
        <input 
          type='text' 
          id='comment_input'
          className='comment_input'
          name='body' 
          placeholder='have your say!'
          onChange={handleChange} 
          required/>
          <input type='submit' className='comment_submit' value='Post' disabled={!isLoggedIn}/>
      </form>
    </section>
  )
}

export default PostComment;

