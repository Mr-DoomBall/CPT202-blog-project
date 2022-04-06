import Login from "../Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import Message from "../pages/message/Message";
import FriendList from "../pages/FriendList";
import MainPage from "../pages/chatPage/MainPage";
import Register from "../pages/Account/Register";
import ChangePassword from "../pages/Account/ChangePassword";


export default function BaseRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/changepassword" element={<ChangePassword />}></Route>
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="/dashboard/message" element={<Message />}></Route>
                    <Route path="/dashboard/profile" element={<Profile />}></Route>
                    <Route path="/dashboard/friendlist" element={<FriendList />}></Route>
                    <Route path="/dashboard/chatpage" element={<MainPage />}></Route>
                </Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}