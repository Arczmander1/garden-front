import React from 'react';

import './App.css'

export const App = () => {
    return (
        <>
            <header>
                <h1>Miód z pasieki</h1>
            </header>

            <ul className="wrapperMenu">
                <li>Sklep</li>
                <li>Promocje</li>
                <li>Nowości</li>
                <li>O nas</li>
                <li>Kontakt</li>
            </ul>

            <div className="backgroundOfWeb"></div>
            <footer> Created by Arkadiusz Martenka</footer>
        </>
    );
}

export default App;

