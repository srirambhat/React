import './App.css';
import BasicTable from './components/BasicTable';
import { useState } from 'react';

function App() {
    const [columns, setColumns] = useState([
        {
            Header: 'Company',
            accessor: 'company', // accessor is the "key" in the data
        },
        {
            Header: 'Contact',
            accessor: 'contact',
        },
        {
            Header: 'Country',
            accessor: 'country',
        },
    ]);

    const [data, setData] = useState([
        {
            company: 'Alfred',
            contact: 'Maria Anders',
            country: 'Germany',
        },
        {
            company: 'Centro comercial Moctezuma',
            contact: 'Francisco Chang',
            country: 'Mexico',
        },
        {
            company: 'Ernst Handel',
            contact: 'Roland Mendel	',
            country: 'Austria',
        },
    ]);

    return (
        <div className="App">
            <BasicTable columns={columns} data={data} />
        </div>
    );
}

export default App;
