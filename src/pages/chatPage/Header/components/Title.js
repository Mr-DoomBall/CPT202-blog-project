import React from 'react';
import './Title.scss'

function Title({ title }) {
    return (
        <div className='title-container'>
            {title}
        </div>
    );
}

export default Title;