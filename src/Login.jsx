import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Input } from "antd"; 

import './css/Login.scss'


export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navi = useNavigate()

    //读取来自后端URL的数据
    // 检验账号密码是否正确
    //账号密码一致则跳转至dashboard(finished)
    function Checkinfo() {

        //带参数POST请求(axios 和 fetch)
        // axios({
        //     method: "post",
        //     url: "url",
        //     data: {
        //         参数名: 参数值
        //     }
        // }).then(res => {
         
        // }).catch(err => {
             
        // })

        fetch(" ./userinfo.json",{
            // method: "POST",
            // data : {

            // }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result.userinfo[0])
                }
            )
            .catch(
                console.log(0)
            )

        {
            if ((username === "Alpha") && (password === "123456")) {
                console.log(1)
                navi('/dashboard', {
                    state: {
                        UN: username,
                        PW: password
                    }
                })
            }
            else {
                console.log(0)
                alert("Username or password is not correct")
            }
        }
    }

    function sendInfo() {
        fetch('./',{
            method:'POST',
            data : {
                RUname : username,
                RPword : password
            }
            
        })
    }

    //表单主体
    return (
        <div className="loginform">
            <h1>Simple Blog connect</h1>
            <p>Login page</p>
            <Input style={{width:200}} className="login-input" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <br />
            <Input style={{width:200}} className="login-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button onClick={Checkinfo}>Sign in</button>
            <br />
            <button onClick={sendInfo}>Register</button>
        </div>
    )
}