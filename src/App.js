import React, {useState} from 'react';

import './App.css';
import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import css from './App.module.css';
import {postService} from "./config/services/post.service";


const App = () => {
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);
    const [posts, setPosts] = useState([]);

    const getUser = (user) => {
        setUser(user)
    }
    const getUserId = (id) => {
        postService.getByUserID(id).then(value => setPosts([...value]))
      
    }
    return (
        <div>
            <div className={css.wrap}>
                <Users getUser={getUser}/>
                {user && <UserDetails user={user} getUserId={getUserId} />}
            </div>
            {!!posts.length && <Posts posts={posts}/>}

        </div>
    );
};

export default App;