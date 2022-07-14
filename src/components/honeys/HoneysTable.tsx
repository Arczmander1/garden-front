import React from "react";
import {HoneyRowInTable} from "./HoneyRowInTable";
import {GardenEntity} from 'types';

interface Props {
    honeys: GardenEntity[];
    onHoneyListChange: () => void;
}

export const HoneysTable = (props: Props) => (
    <table>
        <thead>
        <tr>
            <th>Nazwa</th>
            <th>Cena</th>
            <th>Pochodzenie</th>
            <th>Litry</th>
            <th>Usuń</th>
        </tr>
        </thead>
        <tbody>
        {
            props.honeys.map(honey => (<HoneyRowInTable honey={honey} key={honey.id} onHoneyListChange={props.onHoneyListChange}/>
            ))
        }
        </tbody>
    </table>
)