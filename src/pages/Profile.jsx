import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import { Input } from 'antd'

export default function Profile() {
  let info = useLocation()
  const [condition, setCondition] = useState("")
  const [intro, setIntro] = useState("")
  const { TextArea } = Input;
  
  useEffect(() => {
    // fetch("url")
    //   .then(res => res.json)
    //   .then(
    //     (result) => {
    //       setIntro(result.lintro)
    //     }
    //   )

    setCondition(true)
    setIntro("Hello, CPT202!")
  },[])
  
  function editText() {
    setCondition(false)
    console.log("edit mode")
  }

  function saveText() {
    setCondition(true)
    console.log("save change")

    // fetch("url",{
    //   method:"POST",
    //   data:{
    //     pIntro : intro
    //   }
    // })
  }

  return (
    <div>
      <h2>This is the Profile of {info.state.Uname}</h2>
      <p>self introduction:</p>
      <p>{intro}</p>
      <TextArea rows={4} style={{width:300}}  placeholder={intro} disabled={condition} onChange={(e) => setIntro(e.target.value)} />
      <button onClick={editText}>edit</button>
      <button onClick={saveText}>save</button>
    </div>
  )
}
