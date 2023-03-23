import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from 'recharts';
import CryptoSummary from '../Components/Cryptosummary';

const cnstdata = [
    { dateortime: 'January', price: 21 },
    { dateortime: 'February', price: 35 },
    { dateortime: 'March', price: 75 },
    { dateortime: 'April', price: 51 },
    { dateortime: 'May', price: 41 },
    { dateortime: 'June', price: 47 },
];

export default function Cryptoline() {
    const [cryptos, setCryptos] = useState();
    const [range, setRange] = useState(30);
    const [selected, setSelected] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        const url =
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
        axios.get(url).then((response) => {
            setCryptos(response.data);
        });
    }, []);

    useEffect(() => {
        if (!selected) return;
        axios
            .get(
                `https://api.coingecko.com/api/v3/coins/${
                    selected?.id
                }/market_chart?vs_currency=usd&days=${range}&${
                    range === 1 ? 'interval=hourly' : `interval=daily`
                }`
            )
            .then((response) => {
                console.log('Response: ', response.data);

                setData(
                    response.data.prices.map((price) => {
                        var dt = moment
                            .unix(price[0] / 1000)
                            .format(range === 1 ? 'HH:MM' : 'MM-DD');
                        var pr = parseInt(price[1].toFixed(2));
                        var i = {
                            dateortime: dt,
                            price: pr,
                        };
                        return i;
                    })
                );
            });
    }, [selected, range]);

    return (
        <>
            <div className="mx-3 ">
                <select
                    className="px-2 py-1 mr-3 mt-4 rounded-md bg-gray-800 text-white "
                    onChange={(e) => {
                        const c = cryptos?.find((x) => x.id === e.target.value);
                        console.log(c);
                        setSelected(c);
                    }}
                    defaultValue="default"
                >
                    <option value="default">Choose an option</option>
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
                <select
                    className="px-1 py-1 mr-3 bg-gray-800 rounded-md text-white"
                    onChange={(e) => {
                        setRange(parseInt(e.target.value));
                    }}
                >
                    <option value={30}>30 Days</option>
                    <option value={7}>7 Days</option>
                    <option value={1}>1 Day</option>
                </select>
            </div>
            {/* {data ? console.log(data) : null}
            {console.log(cnstdata)} */}
            <div className="row mx-3">
                <div className="col-md-12">
                    <br></br>
                    <h4>
                        {selected
                            ? `${selected?.name} Price Over Last ` +
                              range +
                              (range === 1 ? ' Day.' : ' Days.')
                            : null}
                    </h4>
                </div>
                {selected ? <CryptoSummary crypto={selected} /> : null}

                {selected ? (
                    <div className="section col-md-6">
                        {/* <h3 className="section-title">Line Chart</h3> */}
                        <div className="section-content">
                            <ResponsiveContainer width="150%" height={500}>
                                <LineChart
                                    data={data}
                                    margin={{
                                        top: 15,
                                        right: 0,
                                        bottom: 15,
                                        left: 0,
                                    }}
                                >
                                    <Tooltip />
                                    <XAxis dataKey="dateortime" />
                                    <YAxis />
                                    <CartesianGrid
                                        stroke="#ccc"
                                        strokeDasharray="5 5"
                                    />
                                    <Legend />
                                    <Line
                                        type="monotone"
                                        dataKey="price"
                                        stroke="#FB8833"
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                ) : null}

                {/* <div className="section col-md-6">
                    <h3 className="section-title">Bar Chart</h3>
                    <div className="section-content">
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart
                                data={data}
                                margin={{
                                    top: 15,
                                    right: 0,
                                    bottom: 15,
                                    left: 0,
                                }}
                            >
                                <XAxis dataKey="dateortime" />
                                <YAxis />
                                <CartesianGrid
                                    stroke="#ccc"
                                    strokeDasharray="5 5"
                                />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="price" fill="#FB8833" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div> */}
            </div>
        </>
    );
}
