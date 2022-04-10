import React, { useState, useEffect } from 'react';
import { List, message, Avatar } from 'antd';
import VirtualList from 'rc-virtual-list';

const fakeDataUrl =
  'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
const ContainerHeight = 850;

const Sider = () => {
  const [data, setData] = useState([]);

  const appendData = () => {
    fetch(fakeDataUrl)
      .then(res => res.json())
      .then(body => {
        setData(data.concat(body.results));
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
    <List>
      <VirtualList
        data={data}
        height={ContainerHeight}
        itemHeight={47}
        itemKey="email"
        onScroll={onScroll}
      >
        {item => (
          <List.Item key={item.email} onClick={onScroll}>
            <List.Item.Meta
              avatar={<Avatar src={item.picture.large} />}
              title={<a>{item.name.last}</a>}
              description='test message'
            />
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
};

export default Sider