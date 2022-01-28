import React from 'react';
import {useLocation} from "react-router-dom";

const UserDetails = () => {
    let location = useLocation();


    return (
        <div>
            {
                JSON.stringify(location.state)
            }
        </div>
    );
};

export default UserDetails;