import Login from "../Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import Message from "../pages/Message";
import FriendList from "../pages/FriendList";


export default function BaseRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="/dashboard/message" element={<Message />}></Route>
                    <Route path="/dashboard/profile" element={<Profile />}></Route>
                    <Route path="/dashboard/friendlist" element={<FriendList />}></Route>
                </Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}