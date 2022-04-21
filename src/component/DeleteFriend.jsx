import React from 'react'

export default function DeleteFriend(tar) {

    const postDelete = () => {
        fetch('http://localhost:8088/friend/delete',{
            method: "POST",
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    userId: tar.tar
                }
            )
        })
        .then(res => res.json())
        .then(
            (result) => {
                if (result.status === 200){
                    alert(result.message)
                }
                else {
                    alert(result.message)
                }
            }
        )
    }

  return (
    <a onClick={postDelete}>Delete</a>
  )
}
