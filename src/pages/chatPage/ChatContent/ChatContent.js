
import React, { useEffect, useState } from 'react';
import './ChatContent.scss';
import { dummyChatItems } from '../../../constants/data'
import ChatItem from './chatItem/ChatItem'

function ChatContent({ message }) {

    const [chatData, setChatData] = useState([])
    useEffect(() => {
        //call api method here.
        setChatData(dummyChatItems)
    }, [])

    useEffect(() => {
        if (message['id'] !== undefined) setChatData([...chatData, message])
    }, [message])

    return (
        <div className='content-container'>
            {chatData.map((item) => {
                return <React.Fragment key={item.id}>
                    <ChatItem item={item} />
                </React.Fragment>
            })}
        </div>
    );
}

export default ChatContent;