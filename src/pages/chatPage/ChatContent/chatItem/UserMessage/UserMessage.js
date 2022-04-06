import React from 'react';
import { Popover, Avatar } from 'antd';
import './UserMessage.scss'

function UserMessage({ item }) {
    return (
        <Popover
            visible={true}
            placement="right"
            content={item.content.message}
        >
            <div className='user-avatar-container'>
                <Avatar src={item.userInfo.avatar} />
            </div>
        </Popover>
    );
}

export default UserMessage;