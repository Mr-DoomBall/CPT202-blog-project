import React, { useEffect, useState } from 'react'
import { Layout, List, Button } from 'antd'
import VirtualList from 'rc-virtual-list'

import localStorage from 'localStorage';

import mesTestData from "../../constants/mesTestdata.json"
import './Message.scss'
import SingleComment from './singleMessage/SingleComment';
import NewMessage from './singleMessage/newMessage/NewMessage';


export default function Message() {
    const [message, setMessage] = useState("")
    const { Footer, Content } = Layout;
    const user = localStorage.getItem('user')

    const appendData = () => {
        fetch("http://localhost:8088/blog/all", {
            method: "GET",
            credentials: 'include'
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setMessage(result.data)
                }
            )
    }

    useEffect(() => {
        appendData()
    }, [])

    const onScroll = () => {
        appendData()
    }

    return (
        <div className='mesBlock'>
            <Layout>
                <Layout>
                    <Content>
                        <NewMessage />
                        <List>
                            <VirtualList
                                data={message}
                                height={700}
                                itemHeight={47}
                                itemKey="blogid"
                                onScroll={onScroll}
                            >
                                {item => (
                                    <SingleComment item={item} />
                                )}
                            </VirtualList>
                        </List>

                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </div>
    )
}