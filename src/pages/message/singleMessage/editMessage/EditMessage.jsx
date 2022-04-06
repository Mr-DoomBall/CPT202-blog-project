import React, { useState } from 'react';
import { Modal, Form, Input } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const EditMessage = (id) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [newContent, setNewContent] = useState()

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        //we should call api method here
        // fetch('https:// localhost:8088/blog/update',{
        //     method: 'POST',
        //     data: {
        //         blogid: id.id,
        //         newblogContent: newContent
        //     }
        // })
        // .then(res => res.json())
        // .then(
        //     (result) => {
        //         if (result === 1) {
        //             alert('succeed')
        //         }
        //         else {
        //             alert("fail")
        //         }
        //     }
        // )
        // .catch(
        //     alert('error')
        // )

        alert('change succeed')
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    return (
        <>
            <a onClick={showModal}>edit</a>
            <Modal title="Edit blog" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form {...layout} name="edit-mes" >
                    <Form.Item name={'content'} label="new content" >
                        <Input.TextArea onChange={(e) => setNewContent(e.target.value)} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default EditMessage