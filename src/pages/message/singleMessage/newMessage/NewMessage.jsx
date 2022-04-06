import React, { useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';
import UploadFile from '../../../../component/UploadFile';

import localStorage from 'localStorage';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const NewMessage = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [content, setContent] = useState()
    const user = localStorage.getItem('user')

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        //we should call api method here
        // fetch('https://localhost:8088/blog', {
        //     method:'POST',
        //     data:{
        //         blogContent: content,
        //         blogAuthor: user
        //     }
        // }).then(res => res.json())
        // .then(
        //     (result) => {
        //         if (result === 1) {
        //             alert('post succeed')
        //         }
        //         else {
        //             alert('error')
        //         }
        //     }
        // )
        // .catch(
        //     alert('error')
        // )
        alert('post succeed')
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    return (
        <>
            <Button type='primary' onClick={showModal}>Post my blog</Button>
            <Modal title="new blog" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form {...layout} name="new-mes" >
                    <Form.Item name={'content'} label="new content" >
                        <Input.TextArea onChange={(e) => setContent(e.target.value)} />
                    </Form.Item>
                    <Form.Item name={'pic'} label="picture" >
                        <UploadFile limit={5}/>
                    </Form.Item>                    
                </Form>
            </Modal>
        </>
    );
};

export default NewMessage