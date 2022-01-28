import React, {createRef, useState} from 'react';

import head from './header.module.css'

const Header = () => {
    let [login, setLogin] = useState('');
    let [password, setPassword] = useState('');

    function onSubmit (e){
        e.preventDefault()
        console.log(e.target.login.value);
        console.log(e.target.password.value);

    }

    function onLoginChange (e){
        setLogin(e.target.value)


    }

    function onPasswordChange (e){
        setPassword(e.target.value)

    }



    return (
        <div className={head.wrap}>
            <a href={'#'}>О нас</a>
            <a href={'#'}>Курсы</a>
            <a href={'#'}>Отзывы</a>
            <form className={head.form} onSubmit={onSubmit}>
                <input className={head.input} type="text" name={'login'} placeholder={'Login'} value={login} onChange={onLoginChange}/>
                <input className={head.input} type="text" name={'password'} placeholder={'Password'} value={password}onChange={onPasswordChange}/>
                <button>Войти</button>
            </form>


        </div>
    );
};

export default Header;