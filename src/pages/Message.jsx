import React, { useEffect, useState } from 'react'
import { Input, Layout, Divider } from 'antd'


export default function Message() {
    const { TextArea } = Input;
    const [message, setMessage] = useState("")
    const { Footer, Content } = Layout;

    useEffect(() => {
        fetch("./userinfo.json")
            .then(res => res.json())
            .then(
                (result) => {
                    setMessage(result.userinfo)
                    console.log(result.userinfo)
                    console.log(result.userinfo.length)
                }
            )
    }, [])

    function showMes(i) {
        return (
            <>
                <p>{i} + {message[i]?.username} + {message[i]?.password}</p>
                <TextArea rows={2} style={{ width: 200 }} placeholder={message[i]?.password} />
                <button>edit</button>
                <button>save</button>
                <Divider />
            </>
        )
    }

    return (
        <>
            <Layout>
                <Content>
                    <p>message</p>
                    {showMes(0)}
                    {showMes(1)}
                    {showMes(2)}
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </>
    )
}
