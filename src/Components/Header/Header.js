import React, {createRef} from 'react';

import head from './header.module.css'

const Header = () => {
    const login = createRef();
    const password = createRef();

    function onSubmit (e){
        e.preventDefault()
        console.log(login.current.value);

    }

    return (
        <div className={head.wrap}>
            <a href={'#'}>О нас</a>
            <a href={'#'}>Курсы</a>
            <a href={'#'}>Отзывы</a>
            <form className={head.form} onSubmit={onSubmit}>
                <input className={head.input} type="text" name={'login'} ref={login} placeholder={'Login'}/>
                <input className={head.input} type="text" name={'password'} ref={password} placeholder={'Password'}/>
                <button>Войти</button>
            </form>


        </div>
    );
};

export default Header;