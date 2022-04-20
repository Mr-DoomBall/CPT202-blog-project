import React, { useState, useEffect } from 'react'
import { List, message, Button, Drawer } from 'antd'
import VirtualList from 'rc-virtual-list'
import SingleFriendList from '../component/SingleFriendList';

import '../css/FriendList.scss'
import localStorage from 'localStorage'
import AddFriendDrawer from '../component/AddFriendDrawer';

const ContainerHeight = 800;

export default function FriendList() {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false)
  const user = localStorage.getItem('user')

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const appendData = () => {
    fetch('http://localhost:8088/friend/all',{
      method:'GET',
      credentials: 'include'
    })
      .then(res => res.json())
      .then(body => {
        setData(data.concat(body.data));
        console.log(data)
      });
  };

  useEffect(() => {
    appendData();
  }, []);

  const onScroll = e => {
    if (e.target.scrollHeight - e.target.scrollTop === ContainerHeight) {
      appendData();
    }
  };

  return (
    <div className='flistBlock'>
      <Button type='primary' onClick={showDrawer}>add friend</Button>
      <Drawer title='add friend' placement='right' onClose={onClose} visible={visible}>
        <AddFriendDrawer />
      </Drawer>
      <List>
        <VirtualList
          data={data}
          height={ContainerHeight}
          itemHeight={47}
          onScroll={onScroll}
        >
          {item => (
            <SingleFriendList item={item} />
          )}
        </VirtualList>
      </List>
    </div>

  );
};
