import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import axios from 'axios';
import { MongoClient, ObjectId } from 'mongodb';
import clientPromise from '../../lib/mongodb';

export type Customer = {
    _id: ObjectId;
    name: string;
    industry: string;
};

type GetCustomerReponse = {
    customers: Customer[];
};

export const getStaticProps: GetStaticProps = async (context) => {
    const mClient = await clientPromise;

    const data = await mClient.db().collection('customers').find({}).toArray();

    console.log('!!!!', data);

    //const result = await axios.get<GetCustomerReponse>(
    //    'http://127.0.0.1:8000/api/customers/'
    //);
    //console.log(result.data.customers);

    return {
        props: {
            customers: JSON.parse(JSON.stringify(data)),
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
                    <div key={customer._id.toString()}>
                        <> {customer._id.toString() + ':'}</>
                        <> {customer.name + '  ('}</>
                        <> {customer.industry + ')'}</>
                    </div>
                );
            })}
        </>
    );
};

export default Customers;
