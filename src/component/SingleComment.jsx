import React, { createElement, useState } from 'react';
import { Comment, Tooltip } from 'antd'
import Editor from './Editor';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';




function SingleComment({ item }) {
    const [comment, setComment] = useState(true)
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);

    const like = () => {
        setLikes(1);
        setDislikes(0);
        setAction('liked');
    };

    const dislike = () => {
        setLikes(0);
        setDislikes(1);
        setAction('disliked');
    };

    function initialAction(actions) {
        console.log(actions)
        // setLikes(actions.liken)
        // setDislikes(actions.disliken)

        return [
            <Tooltip key="comment-basic-like" title="Like">
                <span onClick={like}>
                    {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
                    <span className="comment-action">{likes}</span>
                </span>
            </Tooltip>,
            <Tooltip key="comment-basic-dislike" title="Dislike">
                <span onClick={dislike}>
                    {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
                    <span className="comment-action">{dislikes}</span>
                </span>
            </Tooltip>,
            <a onClick={() => setComment(!comment)}>reply to</a>
        ]
    }

    return (
        <li>
            <Comment
                actions={initialAction(item.actions)}
                author={item.author}
                avatar={item.avatar}
                content={item.content}
                datetime={item.datetime}
            />
            {!comment && <Editor />}
        </li>
    );
}

export default SingleComment;