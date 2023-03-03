import React from 'react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../App.css';
import item_list from '../Headers/ItemList';

export default function ListAllItems() {
    const [setoption, setOption] = useState(NaN);
    const navigate = useNavigate();
    const location = useLocation();

    /*
    useEffect(() => {
        if (setoption) {
            console.log('in UseEffect: ', setoption);
            item_list
                .filter((item) => item.index === setoption)
                .map((filteredItem) => {
                    <li>{console.log(filteredItem)}</li>;
                });
        }
    });
    */

    return (
        <select
            className="bg-red-400"
            onChange={(e) => {
                const passValue = parseInt(e.target.value);
                setOption(passValue);
                console.log('inLine: ', passValue);
                navigate(`/ListSingleItem/${passValue}`, {
                    state: { id: passValue },
                });
            }}
            defaultValue="default"
        >
            <option value="default">Choose an option</option>
            {item_list
                ? item_list.map((item) => {
                      return (
                          <option key={item.id} value={item.index}>
                              {item.name}
                          </option>
                      );
                  })
                : null}
        </select>
    );
}
