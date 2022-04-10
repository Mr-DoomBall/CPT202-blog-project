import React, { useState } from 'react';
import { Button, message } from 'antd';
import ProForm, { ModalForm, ProFormText, ProFormUploadButton } from '@ant-design/pro-form';

import localStorage from 'localStorage';

const NewMessage = () => {
    const user = localStorage.getItem('user')

    const appendData = (value) => {
        // we should call api method here
        // fetch('https://localhost:8088/blog', {
        //     method:'POST',
        //     data:{
        //         value
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
        console.log(value)
    };

    return (
        <>
            <ModalForm title="新建表单" trigger={<Button type='primary' >Post my blog</Button>} autoFocusFirstInput modalProps={{
                onCancel: () => console.log('run'),
            }} onFinish={async (values) => {
                // console.log(values);
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
                        action="/upload.do"
                    />
                </ProForm.Group>
            </ModalForm>

        </>
    );
};

export default NewMessage