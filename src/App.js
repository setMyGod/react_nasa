import React from 'react';

import Header from "./Components/Header/Header";
import Midle from "./Components/Midle/Midle";
import './App.css'
import Footer from "./Components/Footer/Footer";







const App = () => {
    return (
        <div className={'all'}>
            <Header/>
            <Midle/>
            <Footer/>


        </div>
    );
};

export default App;