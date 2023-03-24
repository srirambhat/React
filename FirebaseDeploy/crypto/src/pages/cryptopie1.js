import { useState, useEffect } from 'react';
import axios from 'axios';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
import { colorTypes } from '../Components/types';
import './cryptopie.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Cryptopie() {
    const [cryptos, setCryptos] = useState();
    const [selected, setSelected] = useState([]);
    const [pieData, setPieData] = useState([]);
    const [newSelected, setNewSelected] = useState();
    const [amount, setAmount] = useState(NaN);

    useEffect(() => {
        const url =
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
        axios.get(url).then((response) => {
            setCryptos(response.data);
        });
    }, []);

    function updateOwned(item, amount) {
        console.log('item:', item);
        let temp = [...selected];
        let tempObj = temp.find((c) => {
            console.log('c.id', c.id, 'item.id', item.id);
            return c.id === item.id;
        });

        if (tempObj) {
            // Found the object in list
            // console.log('Found');
            tempObj.owned = amount;
            tempObj.totalValueHeld = tempObj.owned * tempObj.current_price;
        } else {
            // Didnt find the object in list
            // console.log('Not Found');
            item.owned = amount;
            item.totalValueHeld = item.owned * item.current_price;
            setSelected([...selected, item]);
        }
    }

    function setInputAmount(item) {
        console.log('item:', item);
        let temp = [...selected];
        let tempObj = temp.find((c) => {
            console.log('c.id', c.id, 'item.id', item.id);
            return c.id === item.id;
        });

        console.log('tempObj: ', tempObj);
        if (tempObj) {
            // Found the object in list
            console.log('Found');
            setAmount(tempObj.owned);
        } else {
            // Didnt find the object in list
            console.log('Not Found');
            setAmount(0);
        }
    }

    useEffect(() => {
        // console.log(
        //     'SELECTED:',
        //     selected,
        //     'colorTypes: ',
        //     colorTypes,
        //     'Length',
        //     colorTypes.length
        // );
        if (selected.length === 0) return;

        setPieData(
            selected.map((s) => {
                var i = {
                    name: s.name,
                    value: s.owned * s.current_price,
                };
                return i;
            })
        );
    }, [selected]);

    function CustomTooltip({ active, payload, label }) {
        if (active) {
            return (
                <div
                    className="custom-tooltip"
                    style={{
                        backgroundColor: '#ffff',
                        padding: '5px',
                        border: '1px solid #cccc',
                    }}
                >
                    <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
                </div>
            );
        }

        return null;
    }

    return (
        <>
            <div className="cryptopie__projects section__padding" id="projects">
                <div className="cryptopie__projects-heading">
                    <select
                        className="px-2 py-1 mr-3 mt-4 rounded-md bg-gray-800 text-white "
                        onChange={(e) => {
                            console.log('e: ', e.target.value);
                            const c = cryptos?.find(
                                (x) => x.id === e.target.value
                            );
                            console.log('c', c);
                            setInputAmount(c);
                            setNewSelected(c);
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

                    <input
                        className="px-2 py-1 mr-3 mt-4 rounded-md bg-gray-800 text-white"
                        placeholder="0"
                        type="number"
                        style={{ margin: 10 }}
                        value={amount}
                        onChange={(e) => {
                            setAmount(parseFloat(e.target.value));
                            updateOwned(
                                newSelected,
                                parseFloat(e.target.value)
                            );
                        }}
                    ></input>
                </div>
                <div className="cryptopie__projects-heading">
                    {console.log('selected', selected)}
                    <TableContainer component={Paper}>
                        <Table
                            sx={{ minWidth: 450 }}
                            size="small"
                            aria-label="a dense table"
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Owned Crypto </TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell align="right">Owned</TableCell>
                                    <TableCell align="right">
                                        Total Value
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {selected.map((s) => (
                                    <TableRow
                                        // key={s.name}
                                        sx={{
                                            '&:last-child td, &:last-child th':
                                                { border: 0 },
                                        }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {s.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            {s.current_price}
                                        </TableCell>
                                        <TableCell align="right">
                                            {s.owned}
                                        </TableCell>
                                        <TableCell align="right">
                                            {(
                                                s.owned * s.current_price
                                            ).toLocaleString(undefined, {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2,
                                            })}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {selected
                        ? 'Your portfolio is worth: $' +
                          selected
                              .map((s) => {
                                  if (isNaN(s.owned)) {
                                      return 0;
                                  }

                                  return s.current_price * s.owned;
                              })
                              .reduce((prev, current) => {
                                  //   console.log('prev, current', prev, current);
                                  return prev + current;
                              }, 0)
                              .toLocaleString(undefined, {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                              })
                        : null}
                </div>
            </div>
            {console.log('pieData:', pieData)}
            <div className="cryptopie__projects-heading">
                {pieData ? (
                    <PieChart width={730} height={300}>
                        <Pie
                            data={selected}
                            color="#000000"
                            dataKey="totalValueHeld"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={120}
                            fill="#8884d8"
                        >
                            {pieData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={colorTypes[index].hex}
                                />
                            ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                    </PieChart>
                ) : null}
            </div>
        </>
    );
}
