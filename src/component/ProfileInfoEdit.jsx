import React, { useState } from 'react'
import { Input, Button, Form, message } from 'antd'
import ProForm, { ModalForm, ProFormText, ProFormUploadButton } from '@ant-design/pro-form';

import localStorage from 'localStorage';

export default function ProfileInfoEdit() {
  const user = localStorage.getItem('user')
  const [editEmail, setEditEmail] = useState()
  const [editGender, setEditGender] = useState()
  const [editIntro, setEditIntro] = useState()

  const appendData = () => {
    // fetch('url', {
    //   method: "POST",
    //   data: {
    //     username: user,
    //     email: editEmail,
    //     gender: editGender,
    //     intro: editIntro
    //   }
    // })
    // .then(res => res.json())
    // .then(
    //   (result) => {
    //     if (result === 1) {
    //       alert('change succeed')
    //     }
    //     else {
    //       alert('change fail')
    //     }
    //   }
    // )
    alert('change successful')
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
        <ProFormText width="md" name="Email" label="new Email" />
        <ProFormText width="md" name="gender" label="new gender" />
        <ProFormText width="md" name="introduction" label="new introduction" />
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
          action="/upload.do"
        />
      </ProForm.Group>
    </ModalForm>
  )
}
