import React, { useState } from 'react';
import { message } from 'antd';
import ProForm, { ModalForm, ProFormText, ProFormUploadButton } from '@ant-design/pro-form';

const EditMessage = (item) => {

    const appendData = () => {
        //we should call api method here
        fetch('http://localhost:8088/blog/edit',{
            method: "POST",
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    blogId: item.item.blogId,
                    content: item.item.content,
                    images: item.item.images
                }
            )
        })
        .then(res => res.json())
        .then(
            (result) => {
                if (result.status === 200) {
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
    };

    return (
        <>  
            <ModalForm title="新建表单" trigger={<a>edit</a>} autoFocusFirstInput modalProps={{
                onCancel: () => console.log('run'),
            }} onFinish={async (values) => {
                appendData(values)
                console.log(values);
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

export default EditMessage