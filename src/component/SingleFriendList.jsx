import React from 'react'
import { List, Avatar } from 'antd'
import { useNavigate } from 'react-router-dom'
import DeleteFriend from './DeleteFriend'

export default function SingleFriendList({item}) {
    const navi = useNavigate()

    const goChat = () => {
        navi('../chatpage')
    }

    return (
        <List.Item>
            <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a onClick={goChat}>{item.userName}</a>}
                description={item.email}
            />
            <div>Content</div>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <DeleteFriend tar={item.userId}/>
        </List.Item>
    )
}
