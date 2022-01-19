import React, {useEffect, useState} from 'react';
import Ship from "../Ship/Ship";

const Ships = () => {
    let [ships, setShips] = useState([]);
    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setShips(value.filter(value => value.launch_year !== '2006')))



    },[])

    return (

        <div>

            {ships.map(value => <Ship flight_number={value.flight_number} mission_name={value.mission_name} launch_year = {value.launch_year}/>)}

        </div>
    );
};

export default Ships;