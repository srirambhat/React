import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import item_list from './Headers/ItemList';
import Navbar from './Headers/navbar';

function App() {
    const [setoption, setOption] = useState(NaN);
    const [setfilteredItem, setFilteredItem] = useState();

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

    return (
        <div className="App mx-5 my-5">
            <Navbar></Navbar>
            <br></br>
            <select
                className="bg-red-200 rounded-md"
                onChange={(e) => {
                    setOption(parseInt(e.target.value));
                    //console.log('inLine: ', setoption);
                }}
                defaultValue="default"
            >
                <option value="default">Choose an option</option>
                {item_list
                    ? item_list.map((item) => {
                          return (
                              <option key={item.index} value={item.index}>
                                  {item.name}
                              </option>
                          );
                      })
                    : null}
            </select>
        </div>
    );
}

export default App;
