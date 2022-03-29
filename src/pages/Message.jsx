import React, { useEffect, useState } from 'react'
import { Layout, Tooltip, List, Button } from 'antd'

import moment from 'moment';
import localStorage from 'localStorage';

import '../css/Message.scss'
import SingleComment from '../component/SingleComment';
import Editor from '../component/Editor';


export default function Message() {
    const [message, setMessage] = useState("")
    const [ableCom, setAbleCom] = useState(true)
    const { Footer, Content } = Layout;
    const user = localStorage.getItem('user')
    console.log(user)

    useEffect(() => {
        // fetch("./userinfo.json")
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             setMessage(result.userinfo)
        //             console.log(result.userinfo)
        //             console.log(result.userinfo.length)
        //         }
        //     )
    }, [])

    const data = [
        {
            actions: {
                liken: 5,
                disliken: 1
            },
            author: 'Test user Alpha',
            avatar: 'https://joeschmoe.io/api/v1/random',
            content: (
                <p>
                    hello, CPT202, I'm test user Alpha.
                </p>
            ),
            datetime: (
                <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().subtract(1, 'days').fromNow()}</span>
                </Tooltip>
            ),
        },
        {
            actions: {
                liken: 50,
                disliken: 100
            },
            author: 'Test user Beta',
            avatar: 'https://joeschmoe.io/api/v1/random',
            content: (
                <p>
                    This is just a test, to show what will happen before our project finished.
                </p>
            ),
            datetime: (
                <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().subtract(2, 'days').fromNow()}</span>
                </Tooltip>
            ),
        },
    ];

    return (
        <div className='mesBlock'>
            <Layout>
                <Layout>
                    <Content>
                        <Button onClick={() => setAbleCom(!ableCom)} type="primary">Post my blog</Button>
                        {!ableCom && <Editor />}
                        <List
                            className="comment-list"
                            header='comment area'
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                                <SingleComment item={item} />
                            )}
                        />
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </div>
    )
}
