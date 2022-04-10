import React, { useEffect, useState } from 'react'
import { Descriptions, Badge, Avatar} from 'antd'

import '../css/Profile.scss'
import localStorage from 'localStorage';
import testdata from '../constants/ProfileTestData.json'
import ProfileInfoEdit from '../component/ProfileInfoEdit';

export default function Profile() {
  const user = localStorage.getItem('user')

  useEffect(() => {
    // fetch("url", {
    //   method:'POST',
    //   data: {
    //     username: user
    //   }
    // })
    //   .then(res => res.json)
    //   .then(
    //     (result) => {
    //       setIntro(result.lintro)
    //     }
    //   )
  }, [])

  return (
    <div className='pinfoBlock'>
      <div className='avatar'>
        <Avatar size={200} shape='square' src={testdata.userinfo.Avatar} />
      </div>

      <Descriptions title="User Info" bordered>
        <Descriptions.Item label="Username">{testdata.userinfo.username}</Descriptions.Item>
        <Descriptions.Item label="Email address">{testdata.userinfo['Email Address']}</Descriptions.Item>
        <Descriptions.Item label="gender">{testdata.userinfo.gender}</Descriptions.Item>
        <Descriptions.Item label="Register time">2022-03-15 10:05:37</Descriptions.Item>
        <Descriptions.Item label="Last login Time" span={2}>
          2022-03-24 17:04:19
        </Descriptions.Item>
        <Descriptions.Item label="Status" span={3}>
          <Badge status="processing" text="Online" />
        </Descriptions.Item>
        <Descriptions.Item label="self Intro">
        {testdata.userinfo['self Intro']}
        </Descriptions.Item>
      </Descriptions>

      <ProfileInfoEdit />
    </div>
  )
}
