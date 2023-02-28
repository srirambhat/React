import { useEffect, useState, useContext } from 'react';
import AddCustomer from '../Components/AddCustomer';
import { baseUrl } from '../shared';
import { Link, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { login } from '../pages/Login';
import { LoginContext } from '../App';
import useFetch from '../Hooks/UseFetch';

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
        <>
            {customers ? (
                <>
                    <h1>List of Customers: </h1>
                    {customers.map((customer) => {
                        return (
                            <div className="m-2" key={customer.id}>
                                <Link to={'/customers/' + customer.id}>
                                    <button className="no-underline bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                                        {customer.name}
                                    </button>
                                </Link>
                            </div>
                        );
                    })}
                </>
            ) : null}

            <AddCustomer
                newCustomer={newCustomer}
                show={show}
                toggleShow={toggleShow}
            />
        </>
    );
}
