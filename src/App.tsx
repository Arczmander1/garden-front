import React from 'react';

import {Route, Routes} from 'react-router-dom';
import {GardenView} from "./views/GardenView";
import {HoneysView} from "./views/HoneysView";
import {Header} from "./components/header/Header";
import {Menu} from "./components/menu/Menu";
import {Bgc} from "./components/bgc/Bgc";
import {Footer} from "./components/footer/Footer";
import {ContactView} from "./views/ContactView";
import {AboutView} from "./views/AboutViews";
import { NewsView } from './views/NewsView';
import {MainView} from "./views/MainViews";


export const App = () => {
    return (
        <>
            <Header/>
            <Menu/>
            <Bgc/>
            <Footer/>
            <Routes>
                <Route path="/honeys" element={<HoneysView/>}/>
                <Route path="/shop" element={<GardenView/>}/>
                <Route path="/contact" element={<ContactView/>}/>
                <Route path="/about" element={<AboutView/>}/>
                <Route path="/news" element={<NewsView/>}/>
                <Route path="/garden" element={<MainView/>}/>

            </Routes>
        </>
    );
};


