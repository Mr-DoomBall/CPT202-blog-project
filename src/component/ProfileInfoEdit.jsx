import React, { useState } from 'react'
import { Input, Button, Form, message } from 'antd'
import ProForm, { ModalForm, ProFormText, ProFormUploadButton } from '@ant-design/pro-form';

import localStorage from 'localStorage';

export default function ProfileInfoEdit() {
  const user = localStorage.getItem('user')

  const appendData = (value) => {
    fetch('http://localhost:8088/user/edit', {
      method: "POST",
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          email: value.email,
          sex: value.sex,
          intro: value.intro,
          avatar: value.upload[0].response.data.url
        }
      )
    })
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          if (result.status === 200) {
            alert(result.message)
          }
          else {
            alert(result.message)
          }
        }
      )
  }

  return (
    <ModalForm title="新建表单" trigger={<Button type='primary' >edit</Button>} autoFocusFirstInput modalProps={{
      onCancel: () => console.log('run'),
    }} onFinish={async (values) => {
      console.log(values);
      appendData(values)
      message.success('提交成功');
      return true;
    }}>
      <ProForm.Group>
        <ProFormText width="md" name="email" label="new Email" />
        <ProFormText width="md" name="sex" label="new gender" />
        <ProFormText width="md" name="intro" label="new introduction" />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormUploadButton
          name="upload"
          label="Upload"
          max={1}
          fieldProps={{
            name: 'file',
            listType: 'picture-card',
          }}
          action="http://localhost:8088/fileUpload"
        />
      </ProForm.Group>
    </ModalForm>
  )
}
