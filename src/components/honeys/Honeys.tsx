import React, {useEffect, useState} from "react";
import './Honeys.css';
import {GardenEntity} from "types";
import { HoneysTable } from "./HoneysTable";


export const Honeys = () => {
    const [honeysList, setHoneysList] = useState<GardenEntity[] | null>(null);

   const newHoneyTables =  async () => {
       setHoneysList(null);
        const res = await fetch('http://localhost:3001/garden/');
        const data = await res.json();
        setHoneysList(data);

    };

    useEffect(() => {
        newHoneyTables()
    }, []);

    if (honeysList === null) {
        return <p>Wczytywanie...</p>
    }

    return <>
        <h1>Honeys</h1>
        <HoneysTable honeys={honeysList} onHoneyListChange={newHoneyTables}/>
        </>;
};