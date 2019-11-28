import React from 'react';
let value = '';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, addComment, removeComment}) => 
    <li>{text} <span>votes: {votes}</span><br/>
        <button onClick={() => thumbUpComment(id)}>Thumb Up
        </button>
        <button onClick={() => thumbDownComment(id)}>Thumb Down
        </button>
        <button onClick={() => removeComment(id)}>Remove 
        </button><br/>
        <input type='text' placeholder='' onChange={(event) => value = event.target.value}/>
        <button onClick={() => addComment(value)}>Add new
        </button>
    </li>;
export default Comment;