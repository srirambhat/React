import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { baseUrl } from "../shared";

export default function Customers() {
    const [customers, setCustomers] = useState();
    const [notFound, setNotfound] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        //const url = 'https://httpstat.us/501';
        //const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + search;
        const url = baseUrl + 'api/customers/'
        fetch(url)
            .then((response) => {
                console.log(response.status);

                if (response.status === 404) {
                    setNotfound(true);
                } else if (response.status === 401) {

                } else if (response.status === 500) {

                }

                if (!response.ok) {
                    setError(true)
                    throw new Error('Something went wrong');
                }
                return response.json()
            })
            .then((data) => {
                setCustomers(data.customers);
                console.log(data.customers);
            })
            .catch((e) => {
                console.log(e.message);
            });
    }, []);

    return (
        <>
            {customers ? (
                <>
                    <h1>List of Customers: </h1>
                    {customers.map((customer) => {
                        return <p>
                            <Link to={"/customers/" + customer.id}>
                                {customer.name}
                            </Link>
                        </p>;
                    })}
                </>
            ) : null
            }
        </>
    );
}