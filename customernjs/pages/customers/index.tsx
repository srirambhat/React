import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import axios from 'axios';

type Customer = {
    id: number;
    name: string;
    industry: string;
};

type GetCustomerReponse = {
    customers: Customer[];
};

export const getStaticProps: GetStaticProps = async (context) => {
    const result = await axios.get<GetCustomerReponse>(
        'http://127.0.0.1:8000/api/customers/'
    );
    console.log(result.data.customers);

    return {
        props: {
            customers: result.data.customers,
        },
        revalidate: 60, // In seconds
    };
};

const Customers: NextPage = ({
    customers,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    console.log(customers);
    return (
        <>
            <h1>Customers</h1>
            {customers.map((customer: Customer) => {
                return (
                    <div key={customer.id}>
                        <> {customer.id + ':'}</>
                        <> {customer.name + '  ('}</>
                        <> {customer.industry + ')'}</>
                    </div>
                );
            })}
        </>
    );
};

export default Customers;
