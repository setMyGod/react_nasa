import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import usercss from "./styles/users.module.css"


const User = (props) => {
    let{item}=props
    let {id, name} = item;
    let navigation = useNavigate();
    return (
        <div className={usercss.wrap}>

            <div>{id}</div>
            <div>{name}</div>
            <div>
                <button><Link to={'/layout/users/'+id} state={item}>User Details</Link></button>
                {/*<button><Link to={`/layout/users/${id}/posts`}>User Posts</Link></button>*/}
                <button onClick={()=>{
                    navigation(`/layout/users/${id}/posts`)

                }}>User Posts</button>
            </div>


        </div>
    );
};

export default User;