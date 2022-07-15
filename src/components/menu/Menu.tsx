import React from "react";
import { Link } from "react-router-dom";

import './Menu.css'

export const Menu = () => (
    <ul className="wrapperMenu">
        <li><Link to="/shop">Sklep</Link></li>
        <li><Link to="/honeys">Miody</Link></li>
        <li><Link to="/news">Nowości</Link></li>
        <li><Link to="/about">o nas</Link></li>
        <li><Link to="/contact">Kontakt</Link></li>
    </ul>
);
