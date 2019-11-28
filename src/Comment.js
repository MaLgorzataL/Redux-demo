import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, addComment, removeComment}) => 
    <li>{text} <span>votes: {votes}</span><br/>
        <button onClick={() => thumbUpComment(id)}>Thumb Up
        </button>
        <button onClick={() => thumbDownComment(id)}>Thumb Down
        </button>
        <button onClick={() => removeComment(id)}>Remove 
        </button><br/>
        <button onClick={() => addComment('nowy komentarz')}>Add new
        </button>
    </li>;

export default Comment;