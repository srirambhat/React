import { useEffect, useState } from 'react';
import AddCustomer from '../Components/AddCustomer';
import { baseUrl } from '../shared';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { login } from '../pages/Login';

export default function Customers() {
    const [customers, setCustomers] = useState();
    const [show, setShow] = useState(false);

    function toggleShow() {
        setShow(!show);
    }

    const navigate = useNavigate();

    useEffect(() => {
        //const url = 'https://httpstat.us/501';
        //const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + search;
        const url = baseUrl + 'api/customers/';

        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('access'),
            },
        })
            .then((response) => {
                console.log(response.status);

                if (response.status === 401) {
                    navigate('/login');
                }
                if (!response.ok) {
                    throw new Error('Something went wrong');
                }
                return response.json();
            })
            .then((data) => {
                setCustomers(data.customers);
                console.log(data.customers);
            })
            .catch((e) => {
                console.log(e.message);
            });
    }, []);

    function newCustomer(name, industry) {
        const data = { name: name, industry: industry };

        console.log('In newCustomer');
        const url = baseUrl + 'api/customers/';

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Something went wrong');
                }
                return response.json();
            })
            .then((data) => {
                //assume the add was successful
                // hide the modal
                //make sure the list is updated
                toggleShow();
                console.log(data);
                setCustomers([...customers, data.customer]);
            })
            .catch((e) => {
                console.log(e);
            });
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
