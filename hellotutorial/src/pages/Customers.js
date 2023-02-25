import { useEffect, useState } from 'react';
import AddCustomer from '../Components/AddCustomer';
import { baseUrl } from '../shared';
import { Link } from 'react-router-dom';

export default function Customers() {
    const [customers, setCustomers] = useState();
    const [show, setShow] = useState(false);

    function toggleShow() {
        setShow(!show);
    }

    useEffect(() => {
        //const url = 'https://httpstat.us/501';
        //const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + search;
        const url = baseUrl + 'api/customers/';
        fetch(url)
            .then((response) => {
                console.log(response.status);

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
            <h1>List of Customers: </h1>
            <ul>
                {customers ? (
                    <>
                        {customers.map((customer) => {
                            return (
                                <li key={customer.id}>
                                    <Link to={'/customers/' + customer.id}>
                                        {customer.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </>
                ) : null}
            </ul>
            <AddCustomer
                newCustomer={newCustomer}
                show={show}
                toggleShow={toggleShow}
            />
        </>
    );
}
