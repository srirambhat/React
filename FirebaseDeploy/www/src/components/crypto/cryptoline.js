import React from 'react';
import './cryptoline.css';
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

function Cryptoline() {
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
            <div className="wsb__projects section__padding" id="projects">
                <div className="wsb__projects-heading">
                    <p className="gradient__text">Line graph</p>
                    <div className="wsb__project-projectlist">
                        <select
                            onChange={(e) => {
                                const c = cryptos?.find(
                                    (x) => x.id === e.target.value
                                );
                                console.log(c);
                                setSelected(c);
                            }}
                            defaultValue="default"
                        >
                            <option value="default">Choose an option</option>
                            {cryptos
                                ? cryptos.map((crypto) => {
                                      return (
                                          <option
                                              key={crypto.id}
                                              value={crypto.id}
                                          >
                                              {crypto.name}
                                          </option>
                                      );
                                  })
                                : null}
                        </select>
                        <select
                            onChange={(e) => {
                                setRange(parseInt(e.target.value));
                            }}
                        >
                            <option value={30}>30 Days</option>
                            <option value={7}>7 Days</option>
                            <option value={1}>1 Day</option>
                        </select>
                    </div>

                    {selected ? (
                        <p className="gradient__text">
                            {selected.name +
                                ' current price $' +
                                selected.current_price}
                        </p>
                    ) : null}
                </div>
                <div className="wsb__projects-heading">
                    <p className="gradient__text">
                        {selected
                            ? `${selected?.name} Price Over Last ` +
                              range +
                              (range === 1 ? ' Day.' : ' Days.')
                            : null}
                    </p>
                    <ResponsiveContainer width="75%" height={300}>
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
                                stroke="#888"
                                strokeDasharray="1 3"
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
        </>
    );
}

export default Cryptoline;
