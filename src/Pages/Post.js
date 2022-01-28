import React from 'react';

const Post = (props) => {
    let {item} = props;
    let {id,body} = item;

    return (
        <div>
            <div>{id}</div>
            <div>{body}</div>
        </div>
    );
};

export default Post;