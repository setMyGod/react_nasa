import React from 'react';



const Comment = (props) => {
    let {item} = props;
    let{id, body} = item
    return (
        <div>
            {id}
            {body}
        </div>
    );
};

export default Comment;