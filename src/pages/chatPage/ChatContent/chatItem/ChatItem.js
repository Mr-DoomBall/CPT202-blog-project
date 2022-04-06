import React from 'react';
import MasterMessage from './MasterMessage/MasterMessage';
import UserMessage from './UserMessage/UserMessage';
import './ChatItem.scss';

function ChatItem({ item }) {
    return (
        <div className='chat-item-container'>
            {item.master ? <MasterMessage item={item} /> : <UserMessage item={item} />}
        </div>
    );
}

export default ChatItem;