import React, { useState, useEffect } from 'react'
import { List, message } from 'antd'
import VirtualList from 'rc-virtual-list'
import SingleFriendList from '../component/SingleFriendList';

import '../css/FriendList.scss'

const fakeDataUrl =
  'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
const ContainerHeight = 800;

export default function FriendList() {
  const [data, setData] = useState([]);

  const appendData = () => {
    fetch(fakeDataUrl)
      .then(res => res.json())
      .then(body => {
        setData(data.concat(body.results));
        message.success(`${body.results.length} more items loaded!`);
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
      <List>
        <VirtualList
          data={data}
          height={ContainerHeight}
          itemHeight={47}
          itemKey="email"
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
