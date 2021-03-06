import React, { useEffect, useState } from 'react';
import './mainPage.scss';
import Header from './Header/Header'
import ChatContent from './ChatContent/ChatContent'
import ChatInputField from './ChatInputField/ChatInputField'
import Sider from './Sider/Sider';

function MainPage(props) {
    const [message, setMessage] = useState({})

    useEffect(() => {
        // api get info
        // setheaderInfo({
        // userInfo: { id: '001' },
        // })
    }, [])

    const enterMessage = (value) => {
        if (value) setMessage(value)
    }

    return (
        <>
            <div className='block'/>
            <div className='left-container'>
                <Sider />
            </div>
            <div className='main-container'>
                <Header />
                <ChatContent message={message} />
                <ChatInputField enterMessage={enterMessage} />
            </div>
        </>
    );
}

export default MainPage;