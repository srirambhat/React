import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { FileReference } from 'typescript';

export type Crypto = {
    ath: number;
    ath_change_percentage: number;
    ath_date: DataView;
    atl: number;
    atl_change_percentage: number;
    atl_date: DataView;
    circulating_supply: number;
    current_price: number;
    fully_diluted_valuation: number;
    high_24h: number;
    id: string;
    image: FileReference;
    last_updated: DataView;
    low_24h: number;
    market_cap: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    market_cap_rank: number;
    max_supply: number;
    name: string;
    price_change_24h: number;
    price_change_percentage_24h: number;
    roi: string;
    symbol: string;
    total_supply: number;
    total_volume: number;
};

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
                      return <p>{crypto.name + ' $' + crypto.current_price}</p>;
                  })
                : null}
        </div>
    );
}

export default App;
