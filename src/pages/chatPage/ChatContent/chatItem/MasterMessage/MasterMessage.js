import React from 'react';
import { Popover, Avatar } from 'antd';
import './MasterMessage.scss';

function MasterMessage({ item }) {
    return (
        <Popover
            visible={true}
            placement="left"
            content={item.content.message}
        >
            <div className='master-avatar-container'>
                <Avatar src={item.userInfo.avatar} />
            </div>
        </Popover>
    );
}

export default MasterMessage;