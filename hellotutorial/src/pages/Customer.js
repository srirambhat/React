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
        <div className="p-3">
            {notFound ? <p>The customer with id {id} is not found</p> : null}
            {customer ? (
                <>
                    <h1>Name of Customer: </h1>
                    <div>
                        <form
                            className="w-full max-w-sm"
                            id="formCustomerId"
                            onSubmit={updateCustomer}
                        >
                            <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/4">
                                    <label
                                        className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                        for="name"
                                    >
                                        Name
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input
                                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                        id="name"
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
                                </div>
                            </div>
                            <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/4">
                                    <label
                                        for="industry"
                                        className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    >
                                        Industry
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input
                                        id="industry"
                                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
                                </div>
                            </div>
                        </form>
                    </div>
                    {changed ? (
                        <>
                            <button
                                className="mb-2 bg-blue-400 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                                onClick={(e) => {
                                    setTempCustomer({ ...customer });
                                    setChanged(false);
                                }}
                            >
                                Cancel
                            </button>{' '}
                            <button
                                form="formCustomerId"
                                className="mb-2 bg-blue-400 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                                //                                onClick={updateCustomer}
                            >
                                Save
                            </button>
                        </>
                    ) : null}

                    <div>
                        <button
                            className="bg-slate-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={(e) => {
                                const url = baseUrl + 'api/customers/' + id;

                                fetch(url, {
                                    method: 'DELETE',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                })
                                    .then((response) => {
                                        if (!response.ok) {
                                            throw new Error(
                                                'Something went wrong'
                                            );
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
                    </div>
                </>
            ) : null}
            {error ? <p>{error}</p> : null}
            <br />
            <Link to="/customers">
                <button className="no-underline bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                    ← Go back
                </button>
            </Link>
        </div>
    );
}
