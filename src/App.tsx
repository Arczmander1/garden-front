import React from 'react';

import {Header} from "./components/header/Header";
import {Menu} from "./components/menu/Menu";
import {Bgc} from "./components/bgc/Bgc";
import {Footer} from "./components/footer/Footer";

export const App = () => {
    return (
        <>
            <Header/>
            <Menu/>
            <Bgc/>
            <Footer/>
        </>
    );
}


