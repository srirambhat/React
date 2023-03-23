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

const cnstdata = [
    { label: 'January', sales: 21, leads: 41 },
    { label: 'February', sales: 35, leads: 79 },
    { label: 'March', sales: 75, leads: 57 },
    { label: 'April', sales: 51, leads: 47 },
    { label: 'May', sales: 41, leads: 63 },
    { label: 'June', sales: 47, leads: 71 },
];

export default function Cryptopie() {
    return <h1> Cryptopie</h1>;
}
