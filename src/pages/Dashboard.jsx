import { Input } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Dashboard() {
  let info = useLocation()
  const [message, setMessage] = useState("")
  const navi = useNavigate()
  const { TextArea } = Input;

  useEffect(() => {
    fetch("./userinfo.json")
      .then(res => res.json())
      .then(
        (result) => {
          setMessage(result.userinfo)
          // console.log(result.userinfo)
          // console.log(result.userinfo.length)
        }
      )
  }, [])

  console.log(message)

  function toPro() {
    navi('/profile', {
      state: {
        Uname: info.state.UN
      }
    })
  }

  function showMes(i) {
    return (
      <>
        <p>{i} + {message[i]?.username} + {message[i]?.password}</p>
        <TextArea rows={2} style={{width:200}} placeholder="GG"/>
      </>
    )
  }

  return (
    <div>
      <h1>Welcome, {info.state.UN}</h1>
      <button onClick={toPro}>profile</button>
      <p>message</p>
      {showMes(0)}
      {showMes(1)}
      {showMes(2)}
    </div>
  )
}
