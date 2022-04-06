import React, { useState } from 'react';
import './TitleSetting.scss';
import { Popover, Button } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import SettingMenu from './SettingMenu/SettingMenu'

function TitleSetting({ users }) {
    return (
        <div className='title-setting-container'>
            <Popover
                title="Group Name"
                trigger="click"
                placement="leftBottom"
                content={<SettingMenu users={users} />}
            >
                <MoreOutlined />
            </Popover>

        </div>
    );
}

export default TitleSetting;