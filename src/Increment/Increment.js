import React from 'react';
import {useReducer} from "react";
import {click} from "@testing-library/user-event/dist/click";
import css from './increment.module.css'

const reducer = (state, action) =>{
    switch (action.type){
        case 'inc':
            return {count1:state.count1+1}
        case 'dec':
            return {count1:state.count1-1}
        case 'res':
            return {count1:state.count1 = 0}
    }

    return state

}


const Increment = () => {
    let  [state, dispatch] = useReducer(reducer, {count1:0});

    return (
        <div>
            <div className={css.wrap}>{state.count1}</div>
            <button onClick={()=>{dispatch({type: 'inc'})}}>Добавить</button>
            <button onClick={()=>{dispatch({type: 'dec'})}}>Отнять</button>
            <button onClick={()=>{dispatch({type: 'res'})}}>Сбросить</button>

        </div>
    );
};

export default Increment;