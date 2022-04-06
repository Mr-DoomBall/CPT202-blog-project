
import React, { useState } from 'react';
import './ChatInputField.scss';
import { Input } from 'antd'
function ChatInputField({ enterMessage }) {
    const [value, setValue] = useState('');

    const enterMessageHandler = () => {
        // By default, we should using Api Call here
        enterMessage(
            {
                id: 'message' + Math.random(),
                userInfo: { id: '001', name: 'Toby', avatar: 'https://t7.baidu.com/it/u=848096684,3883475370&fm=193&f=GIF' },
                master: true,
                content: {
                    message: value,
                    date: '2022-3-14'
                }
            }
        );
        // before next step, we should use Api call here to upload message
        setValue('')
    }

    return (
        <div className='chat-input-container'>
            <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onPressEnter={() => enterMessageHandler()}
                className={'input-content'}
            />
        </div>
    );
}

export default ChatInputField;