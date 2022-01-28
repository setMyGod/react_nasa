import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Post from "../Post";
import stylepost from './post.module.css'


export default function PostofUser (){
    let {id} = useParams();
    let [post, setPosts] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(value => value.json())
            .then(value =>setPosts([...value]) )
    },[id])
    return(
        <div className={stylepost.wrap}>
            {post.map(value => <Post key={value.id} item={value}/>)}
        </div>

    );


}