import React, { useEffect, useState } from 'react'
import { Descriptions, Badge, Input, Avatar, Drawer, Button, Form } from 'antd'

import '../css/Profile.scss'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

export default function Profile() {
  const [visible, setVisible] = useState(false)
  const [intro, setIntro] = useState("default intro")

  useEffect(() => {
    // fetch("url")
    //   .then(res => res.json)
    //   .then(
    //     (result) => {
    //       setIntro(result.lintro)
    //     }
    //   )

    setIntro("default intro")
  }, [])

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  // fetch("url",{
  //   method:"POST",
  //   data:{
  //     pIntro : intro
  //   }
  // })

  return (
    <div className='pinfoBlock'>
      <div>
        <Avatar size='large' shape='square' src="https://joeschmoe.io/api/v1/random" />
      </div>

      <Descriptions title="User Info" bordered>
        <Descriptions.Item label="Username">Test user Alpha</Descriptions.Item>
        <Descriptions.Item label="Email address">Alpha@student.xjtlu.edu.cn</Descriptions.Item>
        <Descriptions.Item label="gender">Male</Descriptions.Item>
        <Descriptions.Item label="Register time">2022-03-15 10:05:37</Descriptions.Item>
        <Descriptions.Item label="Last login Time" span={2}>
          2022-03-24 17:04:19
        </Descriptions.Item>
        <Descriptions.Item label="Status" span={3}>
          <Badge status="processing" text="Online" />
        </Descriptions.Item>
        <Descriptions.Item label="self Intro">
          {intro}
        </Descriptions.Item>
      </Descriptions>

      <Button type='primary' onClick={showDrawer}>edit</Button>
      <Drawer title='Change info' placement='right' onClose={onClose} visible={visible}>
        <Form {...layout} name="nest-messages" >
          <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'gender']} label="Gender" >
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'introduction']} label="Introduction">
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  )
}
