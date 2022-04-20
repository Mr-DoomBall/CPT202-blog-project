import React, { useEffect, useState } from 'react'
import { Descriptions, Badge, Avatar} from 'antd'

import '../css/Profile.scss'
import localStorage from 'localStorage';
import testdata from '../constants/ProfileTestData.json'
import ProfileInfoEdit from '../component/ProfileInfoEdit';

export default function Profile() {
  const user = localStorage.getItem('user')
  const [intro, setIntro] = useState([])

  useEffect(() => {
    fetch("http://localhost:8088/user/info", {
      method:'GET',
      credentials: 'include'
    })
      .then(res => res.json())
      .then(
        (result) => {
          setIntro(result.data)
          console.log(intro)
        }
      )
  }, [])

  return (
    <div className='pinfoBlock'>
      <div className='avatar'>
        <Avatar size={200} shape='square' src={intro.avatar} />
      </div>

      <Descriptions title="User Info" bordered>
        <Descriptions.Item label="Username">{intro.userName}</Descriptions.Item>
        <Descriptions.Item label="Email address">{intro.email}</Descriptions.Item>
        <Descriptions.Item label="gender">{intro.sex}</Descriptions.Item>
        <Descriptions.Item label="Register time">2022-03-15 10:05:37</Descriptions.Item>
        <Descriptions.Item label="Last login Time" span={2}>
          {intro.loginDate}
        </Descriptions.Item>
        <Descriptions.Item label="Status" span={3}>
          <Badge status="processing" text={intro.status} />
        </Descriptions.Item>
        <Descriptions.Item label="self Intro">
        {intro.intro}
        </Descriptions.Item>
      </Descriptions>

      <ProfileInfoEdit />
    </div>
  )
}
