import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <ol>
                <li><Link to={'/layout/users'}>users</Link></li>
                <li><Link to={'/layout/posts'}>posts</Link></li>
                <li><Link to={'/layout/comments'}>comments</Link></li>
            </ol>
            <hr/>
            <Outlet/>
            <hr/>
        </div>
    );
};

export default Layout;