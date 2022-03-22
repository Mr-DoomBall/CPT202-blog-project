import {  Menu, Button } from 'antd'
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation, Outlet } from 'react-router-dom'


export default function Dashboard() {
  let info = useLocation()

  const [menuState, setMenuState] = useState("")
  const navi = useNavigate()



  useEffect(() => {
    setMenuState(false)
  }, [])

  function toMes() {
    navi('message', {
      state: {
        Uname: info.state.UN
      }
    })
  }

  function toPro() {
    navi('profile', {
      state: {
        Uname: info.state.UN
      }
    })
  }

  function toggleCollapsed() {
    setMenuState(!menuState)
  }

  return (
    <>
      <div style={{ width: 256 }}>
        <Button type='primary' onClick={toggleCollapsed} style={{ marginButtom: 16 }}>
          {React.createElement(menuState ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu mode='inline' theme='dark' inlineCollapsed={menuState}>
          <Menu.Item key="1" icon={<MailOutlined />}>
          <a onClick={toMes}>Message</a>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <a onClick={toPro}>profile</a>
          </Menu.Item>
          <Menu.Item key="3" icon={<AppstoreOutlined />}>
            friendlist
          </Menu.Item>

        </Menu>
      </div>
      <h1>Welcome, {info.state.UN}</h1>

      <Outlet/>

    </>
  )
}
