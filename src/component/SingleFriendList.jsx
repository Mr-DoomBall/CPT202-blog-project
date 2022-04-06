import React from 'react'
import { List, Avatar } from 'antd'
import { useNavigate } from 'react-router-dom'

export default function SingleFriendList({item}) {
    const navi = useNavigate()

    const goChat = () => {
        navi('../chatpage')
    }

    return (
        <List.Item key={item.email}>
            <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a onClick={goChat}>{item.name.last}</a>}
                description={item.email}
            />
            <div>Content</div>
        </List.Item>
    )
}
