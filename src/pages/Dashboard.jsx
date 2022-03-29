import { Menu, Layout } from 'antd'
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DesktopOutlined,
  MailOutlined,
} from '@ant-design/icons';

import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation, Outlet } from 'react-router-dom'

import '../css/Dashboard.scss'


export default function Dashboard() {
  let info = useLocation()

  const { Header, Sider, Content } = Layout

  const [menuState, setMenuState] = useState("")
  const navi = useNavigate()



  useEffect(() => {
    setMenuState(false)
  }, [])

  function toMes() {
    navi('message', {
      
    })
  }

  function toPro() {
    navi('profile', {
      
    })
  }

  function toFList() {
    navi('friendlist', {
      
    })
  }

  function toggleCollapsed() {
    setMenuState(!menuState)
  }

  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={menuState}>
          <div className="logo" />
          <div className='navi'>
            <Menu mode='inline' theme='dark' defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<MailOutlined />}>
                <a onClick={toMes}>Message</a>
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
                <a onClick={toPro}>profile</a>
              </Menu.Item>
              <Menu.Item key="3" icon={<AppstoreOutlined />}>
                <a onClick={toFList}>friendlist</a>
              </Menu.Item>
            </Menu>
          </div>
        </Sider>
        <Layout className='site-layout'>
          <Header className='site-layout-background' style={{ padding: 0 }}>
            {React.createElement(menuState ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => toggleCollapsed(),
            })}
          </Header>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  )
}
