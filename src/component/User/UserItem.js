import React from 'react';
import { Avatar } from 'antd';
function UserItem({ user }) {
    return (
        <div key={user.id}>
            <Avatar src={user.avatar} style={{ marginRight: 10 }} />
            {user.name}
        </div>
    );
}

export default UserItem;