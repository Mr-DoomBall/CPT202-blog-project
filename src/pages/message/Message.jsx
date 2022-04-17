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
    const [ableCom, setAbleCom] = useState(true)
    const { Footer, Content } = Layout;
    const user = localStorage.getItem('user')

    const appendData = () => {
        // fetch("https://localhost:8088/blog/view", {
        //     method: 'POST'
        // })
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             setMessage(result)
        //             console.log(result)
        //         }
        //     )
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
                                data={mesTestData.bloginfo}
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
{/* <List
    className="comment-list"
    header='comment area'
    itemLayout="horizontal"
    dataSource={mesTestData.bloginfo}
    renderItem={item => (
        <SingleComment item={item} />
    )}
/> */}