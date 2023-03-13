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
            //staleTime: 5 * 1000, // Stale time for which data is fresh
            //refetchIntervalInBackground: false
            //refetchOnWindowFocus: false,
        }
    );

    const CustQuery = useQuery(
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

    if (priceQuery?.isLoading || CustQuery?.isLoading) return 'Loading...';
    if (priceQuery?.error)
        return 'An error occured: ' + priceQuery?.error.message;

    if (CustQuery?.error)
        return 'An error occured: ' + CustQuery?.error.message;

    console.log(priceQuery?.data?.data);
    console.log(CustQuery?.data?.data?.data);

    return (
        <div className="App">
            {priceQuery?.data?.data?.bitcoin?.usd
                ? priceQuery?.data?.data?.bitcoin?.usd
                : null}
            <>
                <h1>Customers</h1>
                {CustQuery?.data?.data?.customers.map((customer) => {
                    return (
                        <div key={customer._id?.toString()}>
                            <> {customer._id?.toString() + ':'}</>
                            <> {customer.name + '  ('}</>
                            <> {customer.industry + ')'}</>
                        </div>
                    );
                })}
            </>
        </div>
    );
}

export default App;
