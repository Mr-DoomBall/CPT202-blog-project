import Login from "../Login";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Message from "../pages/Message";


export default function BaseRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="/dashboard/message" element={<Message />}></Route>
                    <Route path="/dashboard/profile" element={<Profile />}></Route>
                </Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}