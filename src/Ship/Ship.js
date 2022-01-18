import React from 'react';


const Ship = (props) => {

  let {flight_number,mission_name,launch_year} = props
    return (
        <div className={'wrapperShip'}>
            <div>{flight_number}</div>
            <div>{mission_name}</div>
           <div> {launch_year}</div>

        </div>
    );
};

export default Ship;