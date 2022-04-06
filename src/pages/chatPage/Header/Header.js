import React, { useEffect, useState } from 'react';
import './Header.scss';
import Title from './components/Title'
import TitleSetting from './components/TitleSetting'
import { dummyUserInfo, dummyUsers } from '../../../constants/data'

function Header(props) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        // api get users
        setUsers(dummyUsers)
    }, [])
    return (
        <div className='header-container'>
            <Title title={'Group Name'} />
            <TitleSetting users={users} />
        </div>
    );
}

export default Header;