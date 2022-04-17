import React, { useState } from 'react';
import { message } from 'antd';
import ProForm, { ModalForm, ProFormText, ProFormUploadButton } from '@ant-design/pro-form';

const EditMessage = (id) => {

    const appendData = () => {
        //we should call api method here
        // fetch('https:// localhost:8088/blog/update',{
        //     method: 'POST',
        //     data: {
        //         blogid: id.id,
        //         value
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
                        action="/upload.do"
                    />
                </ProForm.Group>
            </ModalForm>
        </>
    );
};

export default EditMessage