import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { baseUrl } from '../shared';

export default function Customer() {
    const { id } = useParams();
    const [customer, setCustomer] = useState();
    const [notFound, setNotFound] = useState();
    const [tempCustomer, setTempCustomer] = useState();
    const [changed, setChanged] = useState(false);
    const [error, setError] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        if (!customer) return;
        if (!tempCustomer) return;

        let isEqual = true;

        console.log('customer:', customer);
        console.log('tempCustomer:', tempCustomer);
        console.log('changed: ', changed);

        if (customer.name !== tempCustomer.name) isEqual = false;
        if (customer.industry !== tempCustomer.industry) isEqual = false;

        console.log('isEqual: ', isEqual);

        if (isEqual) {
            setChanged(false);
        }
        if (error && isEqual) {
            setError(undefined);
        }
    });

    useEffect(() => {
        console.log('useEffect');
        const url = baseUrl + 'api/customers/' + id;

        fetch(url)
            .then((response) => {
                if (response.status === 404) {
                    // redirect to a 404 page (new URL)
                    // navigate('/404');
                    // or
                    // render a 404 component in this page for more clarity
                    setNotFound(true);
                }
                if (!response.ok) {
                    console.log(response);
                    throw new Error('Something went wrong, try again later');
                }
                return response.json();
            })
            .then((data) => {
                setCustomer(data.customer);
                setTempCustomer(data.customer);
                setError(undefined);
            })
            .catch((e) => {
                setError(e.message);
            });
    }, []);

    function updateCustomer(e) {
        e.preventDefault();
        const url = baseUrl + '/api/customers/' + id;

        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(tempCustomer),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Something went wrong');
                }
                return response.json();
            })
            .then((data) => {
                setCustomer(data.customer);
                setChanged(false);
                console.log(data);
                setError(undefined);
            })
            .catch((e) => {
                console.log(e.Error);
                setError(e.message);
            });
    }

    return (
        <>
            {notFound ? <p>The customer with id {id} is not found</p> : null}
            {customer ? (
                <>
                    <h1>Name of Customer: </h1>
                    <div>
                        <form id="formCustomerId" onSubmit={updateCustomer}>
                            <p class="m-2 block px-2">ID: {tempCustomer.id}</p>

                            <input
                                class="m-2 block px-2"
                                type="text"
                                value={tempCustomer.name}
                                onChange={(e) => {
                                    setChanged(true);
                                    setTempCustomer({
                                        ...tempCustomer,
                                        name: e.target.value,
                                    });
                                }}
                            />

                            <input
                                class="m-2 block px-2"
                                type="text"
                                value={tempCustomer.industry}
                                onChange={(e) => {
                                    setChanged(true);
                                    setTempCustomer({
                                        ...tempCustomer,
                                        industry: e.target.value,
                                    });
                                }}
                            />
                        </form>
                    </div>
                    {changed ? (
                        <>
                            <button
                                className="m-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"
                                onClick={(e) => {
                                    setTempCustomer({ ...customer });
                                    setChanged(false);
                                }}
                            >
                                Cancel
                            </button>{' '}
                            <button
                                form="formCustomerId"
                                className="m-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"
                                //                                onClick={updateCustomer}
                            >
                                Save
                            </button>
                        </>
                    ) : null}

                    <button
                        className="m-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"
                        onClick={(e) => {
                            const url = baseUrl + 'api/customers/' + id;

                            fetch(url, {
                                method: 'DELETE',
                                headers: { 'Content-Type': 'application/json' },
                            })
                                .then((response) => {
                                    if (!response.ok) {
                                        throw new Error('Something went wrong');
                                    }

                                    // assume things went well
                                    navigate('/customers');
                                    //return response.json()
                                })
                                .catch((e) => {
                                    console.log(e);
                                    //setError(e.message);
                                });
                        }}
                    >
                        Delete
                    </button>
                </>
            ) : null}
            {error ? <p>{error}</p> : null}
            <br />
            <Link to="/customers">Go back</Link>
        </>
    );
}
