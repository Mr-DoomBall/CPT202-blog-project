import React, { useState } from 'react';
import { Button, message } from 'antd';
import ProForm, { ModalForm, ProFormText, ProFormUploadButton } from '@ant-design/pro-form';

import localStorage from 'localStorage';

const NewMessage = () => {
    const user = localStorage.getItem('user')

    const appendData = (value) => {
        // we should call api method here
        fetch('http://localhost:8088/blog/add', {
            method: "POST",
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    content: value.content,
                    images: value.upload[0].response.data.url
                }
            )
        }).then(res => res.json())
            .then(
                (result) => {
                    if (result === 200) {
                        alert(result.message)
                    }
                    else {
                        alert(result.message)
                    }
                }
            )
            .catch(
                err => alert('error')
            )
        alert('post succeed')
        console.log(value)
    };

    return (
        <>
            <ModalForm title="新建表单" trigger={<Button type='primary' >Post my blog</Button>} autoFocusFirstInput modalProps={{
                onCancel: () => console.log('run'),
            }} onFinish={async (values) => {
                console.log(values);
                appendData(values)
                message.success('提交成功');
                return true;
            }}>
                <ProForm.Group>
                    <ProFormText width="md" name="content" label="new content" />
                </ProForm.Group>
                <ProForm.Group>
                    <ProFormUploadButton
                        name="upload"
                        label="Upload"
                        max={5}
                        fieldProps={{
                            name: 'file',
                            listType: 'picture-card',
                        }}
                        action="http://localhost:8088/fileUpload"
                    />
                </ProForm.Group>
            </ModalForm>

        </>
    );
};

export default NewMessage