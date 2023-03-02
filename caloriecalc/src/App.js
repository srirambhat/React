import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import item_list from './Headers/headers';

function App() {
    const [setoption, setOption] = useState(NaN);

    useEffect(() => {
        if (setoption) {
            console.log('in UseEffect: ', setoption);
            item_list
                .filter((item) => item.index === setoption)
                .map((filteredPerson) => (
                    <li>{console.log(filteredPerson)}</li>
                ));
        }
    });

    return (
        <div className="App">
            <select
                onChange={(e) => {
                    setOption(parseInt(e.target.value));
                    console.log('inLine: ', setoption);
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
/*



    useEffect(() => {
        if (setoption) {
            console.log('setoption: ', setoption);
            //console.log(idSearch(setoption));
            <>
                <div>
                    {itemlist
                        .filter((item) => item.index === setoption)
                        .map((filteredItem) => (
                            <>{console.log(filteredItem.name)}</>
                        ))}
                </div>
            </>;
        }
    });

    return (
        
    );
}

 
    */
