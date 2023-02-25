import { Link, useParams, Navigate, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import NotFound from "../Components/NotFound";
import { baseUrl } from "../shared";

export default function Customer() {
    const { id } = useParams();
    const [customer, setCustomer] = useState();
    const [notFound, setNotFound] = useState();
    const navigate = useNavigate();

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
                return response.json();
            })
            .then((data) => {
                setCustomer(data.customer);
            })

    }, []);

    return (
        <>
            {notFound ? <p>The customer with id {id}  is not found</p> : null}
            {customer ? (
                <>
                    <h1>Name of Customer: </h1>
                    <div>
                        <p> {customer.id}</p>
                        <p> {customer.name}</p>
                        <p> {customer.industry}</p>
                    </div>
                </>
            ) : null
            }
            <Link to='/customers'>Go back</Link>
        </>
    )
}