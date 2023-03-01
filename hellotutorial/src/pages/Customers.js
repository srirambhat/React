import { useEffect, useState, useContext } from 'react';
import AddCustomer from '../Components/AddCustomer';
import { baseUrl } from '../shared';
import { Link, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { login } from '../pages/Login';
import { LoginContext } from '../App';
import useFetch from '../Hooks/UseFetch';
import { useTable } from 'react-table';

const styles = {
    thead: {
        backgroundColor: 'skyblue',
    },
    td: {
        padding: '10px',
        border: 'solid 1px black',
    },
};

export default function Customers() {
    //const [customers, setCustomers] = useState();
    const [show, setShow] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const [loggedIn, setLoggedIn] = useContext(LoginContext);

    function toggleShow() {
        setShow(!show);
    }

    const url = baseUrl + 'api/customers/';

    const {
        request,
        appendData,
        data: { customers } = {},
        errorStatus,
    } = useFetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('access'),
        },
    });

    useEffect(() => {
        request();
    }, [Customers]);

    function newCustomer(name, industry) {
        appendData({ name: name, industry: industry });

        if (!errorStatus) toggleShow();
    }

    return (
        <div className="App">
            {customers ? (
                <tbody>
                    <tr style={styles.thead}>
                        <th className="px-3">ID</th>
                        <th className="px-2">Name</th>
                        <th className="px-2">Industry</th>
                    </tr>
                    {customers.map((customer, index) => (
                        <tr key={index}>
                            <td style={styles.td}>{customer.id}</td>
                            <td style={styles.td}>
                                <Link to={'/customers/' + customer.id}>
                                    <button className="text-blue font-bold py-0 px-1">
                                        {customer.name}
                                    </button>
                                </Link>
                            </td>
                            <td style={styles.td}>{customer.industry}</td>
                        </tr>
                    ))}
                </tbody>
            ) : null}
            <AddCustomer
                newCustomer={newCustomer}
                show={show}
                toggleShow={toggleShow}
            ></AddCustomer>
        </div>
    );
}
