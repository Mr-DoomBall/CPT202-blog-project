import React from 'react'
import { Link } from 'react-router-dom'
import '../css/NotFound.scss'

export default function NotFound() {
  return (
    <div>
        <h1 className='Text'>404 not found</h1>
        <hr />
        <h2 className='back'><Link to='/'>Click here to go back to Login page</Link></h2>
    </div>
  )
}
