import React, { createElement, useEffect, useState } from 'react';
import { Comment, Tooltip, Image } from 'antd'
import Editor from './compoment/Editor';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import EditMessage from './editMessage/EditMessage';

import localStorage from 'localStorage';


function SingleComment({ item }) {
    const [comment, setComment] = useState(true)
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);
    const user = localStorage.getItem('user')

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

    const initialAction = (actions) => {
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
            <a onClick={() => setComment(!comment)}>reply to</a>,
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>,
            (user === item.user.userName)?(<EditMessage item={item}/>):null,
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>,
            (user === item.user.userName)?(<a onClick={deMes}>delete</a>):null
        ]
    }

    const initContent = (content) => {
        return [
             content,
            <br />,
            <Image width={100} src={item.images}/>
        ]
    }

    const deMes = () => {
        //call api method here, send {item.blogid}
        fetch('http://localhost:8088/blog/delete',{
            method: "POST",
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    blogId: item.blogId
                }
            )
        }).then(res => res.json())
        .then(
            (result) => {
                if (result.status === 200) {
                    alert(result.message)
                }
                else {
                    alert(result.message)
                }
            }
        )
        .catch(
            err => alert('error')
        )
    }

    return (
        <li>
            <Comment
                actions={initialAction(item.actions)}
                author={item.user.userName}
                avatar={item.user.avatar}
                content={initContent(item.content)}
                datetime={item.datetime}
            />
            {!comment && <Editor />}
        </li>
    );
}

export default SingleComment;