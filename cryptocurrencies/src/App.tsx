import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

import CryptoSummary from './Components/CryptoSummary';
import { Crypto } from './Types';

function App() {
    const [cryptos, setCryptos] = useState<Crypto[] | null>(null);
    const [selected, setSelected] = useState<Crypto | null>();

    useEffect(() => {
        const url =
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false';

        axios.get(url).then((response) => {
            console.log(response.data);
            setCryptos(response.data);
        });
    }, []);

    return (
        <>
            <div className="App">
                <select
                    onChange={(e) => {
                        const c = cryptos?.find((x) => x.id === e.target.value);
                        console.log(c);
                        setSelected(c);
                    }}
                    defaultValue="default"
                >
                    <option value="default"> Choose an Option</option>
                    {cryptos
                        ? cryptos.map((crypto) => {
                              return (
                                  <option key={crypto.id} value={crypto.id}>
                                      {crypto.name}
                                  </option>
                              );
                          })
                        : null}
                </select>
            </div>
            {selected ? <CryptoSummary crypto={selected} /> : null}
        </>
    );
}

export default App;
