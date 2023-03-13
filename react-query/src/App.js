import './App.css';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import NextCors from 'nextjs-cors';

function App() {
    const priceQuery = useQuery(
        ['BitCoinPrice'],
        () => {
            return axios(
                'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'
            );
        },
        {
            // This is very specific to this fetch v/s if it was specified in index.js, then it done for all
            // useQuery
            refetchInterval: 5 * 1000, // milliseconds
        }
    );

    const GlobalQuery = useQuery(
        ['Customers'],
        () => {
            return axios('http://localhost:3000/api/customers');
        },
        {
            // This is very specific to this fetch v/s if it was specified in index.js, then it done for all
            // useQuery
            refetchInterval: 5 * 1000, // milliseconds
        }
    );

    if (priceQuery?.isLoading || GlobalQuery?.isLoading) return 'Loading...';
    if (priceQuery?.error)
        return 'An error occured: ' + priceQuery?.error.message;

    if (GlobalQuery?.error)
        return 'An error occured: ' + GlobalQuery?.error.message;

    console.log(priceQuery?.data?.data);
    console.log(GlobalQuery?.data?.data?.data);
    return (
        <div className="App">
            {priceQuery?.data?.data?.bitcoin?.usd
                ? priceQuery?.data?.data?.bitcoin?.usd
                : null}
            {'   '}
            {GlobalQuery?.data?.data?.data?.active_cryptocurrencies
                ? GlobalQuery?.data?.data?.data?.active_cryptocurrencies
                : null}
        </div>
    );
}

export default App;
