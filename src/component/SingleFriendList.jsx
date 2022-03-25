import React from 'react'
import { List, Avatar } from 'antd'

export default function SingleFriendList({item}) {
    return (
        <List.Item key={item.email}>
            <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.name.last}</a>}
                description={item.email}
            />
            <div>Content</div>
        </List.Item>
    )
}
