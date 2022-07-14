import React, {MouseEvent} from "react";
import {GardenEntity} from "types";

interface Props {
    honey: GardenEntity;
    onHoneyListChange: () => void
}

export const HoneyRowInTable = (props: Props) => {
    const deleteHoney = async (e: MouseEvent) => {
      e.preventDefault();

      if(!window.confirm(`Czy chcesz usunąć ${props.honey.name}?`)) {
          return
      }
       const res = await fetch(`http://localhost:3001/garden/${props.honey.id}`, {
            method: 'DELETE',
        });
        if ([400,500].includes(res.status)) {
            const error = await res.json();
            alert(`Error ${error.message}`)
            return
        }

        props.onHoneyListChange();

    };

    return (
        <tr>
            <th>{props.honey.name} </th>
            <th>{props.honey.price} </th>
            <th>{props.honey.origin} </th>
            <th>{props.honey.capacity} </th>
            <td>
                <a href="#" onClick={deleteHoney}>❌</a>
            </td>
        </tr>
    )
};