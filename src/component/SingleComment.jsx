import React, { useState } from 'react';
import { Comment } from 'antd'
import Editor from './Editor';

function SingleComment({ item }) {
    const [comment, setComment] = useState(true)
    return (
        <li>
            <Comment
                author={item.author}
                avatar={item.avatar}
                content={item.content}
                datetime={item.datetime}
            />
            <a style={{color: "green"}} onClick={() => setComment(!comment)}>reply to</a>
            {!comment && <Editor />}
        </li>
    );
}

export default SingleComment;