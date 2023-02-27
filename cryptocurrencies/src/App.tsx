import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

import CryptoSummary from './Components/CryptoSummary';
import { Crypto } from './Types';

function App() {
    const [cryptos, setCryptos] = useState<Crypto[] | null>();
    useEffect(() => {
        const url =
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false';

        axios.get(url).then((response) => {
            console.log(response.data);
            setCryptos(response.data);
        });
    }, []);

    return (
        <div className="App">
            {cryptos
                ? cryptos.map((crypto) => {
                      return <CryptoSummary crypto={crypto}></CryptoSummary>;
                  })
                : null}
        </div>
    );
}

export default App;
