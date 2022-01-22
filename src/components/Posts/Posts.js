import Post from "../Post/Post";
import cssnew from './Posts.module.css'
const Posts = ({posts}) => {
    return (
        <div className={cssnew.wrap}>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;

