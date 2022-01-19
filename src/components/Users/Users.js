import React, {useEffect, useState} from 'react';
import {userService} from "../../config/services/user.service";
import User from "../User/User";

const Users = () => {
    let [users, setUsers] = useState([]);

    useEffect(()=>{
        userService.getAll().then(value => setUsers(value))

    },[])

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;