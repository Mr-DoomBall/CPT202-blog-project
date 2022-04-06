import React from 'react';
import './SettingMenu.scss';
import UserItem from '../../../../../component/User/UserItem';

function SettingMenu({ users }) {
  return (
    <div className={'setting-menu-container'}>
      {users && users.map((user) => {
        return <React.Fragment key={user.id}>
          <UserItem user={user} />
        </React.Fragment>

      })}
    </div>
  );
}

export default SettingMenu;