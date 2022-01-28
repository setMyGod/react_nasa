import React from 'react';

import './App.css';
import {
    Routes, Route, Link
} from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Posts from "./Pages/Posts";
import Comments from "./Pages/Comments";
import UserDetails from "./Pages/userDetails";
import PostofUser from "./Pages/styles/PostofUser";


const App = () => {
    return (
        <div>

            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/layout'}>Layout</Link></li>
            </ul>

            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/layout'} element={<Layout/>}>
                    <Route path={'/layout/users'} element={<Users/>}>
                        <Route path={'/layout/users/:id'} element ={<UserDetails/>}/>
                        <Route path={'/layout/users/:id/posts'} element ={<PostofUser/>}/>
                    </Route>
                    <Route path={'/layout/posts'} element={<Posts/>}/>
                    <Route path={'/layout/comments'} element={<Comments/>}/>
                </Route>

                <Route/>
            </Routes>

        </div>
    );
};

export default App;