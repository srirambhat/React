import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { MongoClient, ObjectId } from 'mongodb';
import clientPromise from '../../lib/mongodb';
import { getCustomerDataFromMongoDB } from '../api/customers';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import CustomerComponent from '../../Components/Customer';

export type Customer = {
    _id?: ObjectId;
    name: string;
    industry: string;
};

type GetCustomerReponse = {
    customers: Customer[];
};

export const getStaticProps: GetStaticProps = async (context) => {
    const data = await getCustomerDataFromMongoDB();

    console.log('!!!!', data);

    //const result = await axios.get<GetCustomerReponse>(
    //    'http://127.0.0.1:8000/api/customers/'
    //);
    //console.log(result.data.customers);

    return {
        props: {
            customers: data,
        },
        revalidate: 60, // In seconds
    };
};

const Customers: NextPage = ({
    customers: c,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { data: { data: { customers = c } = {} } = {} } = useQuery(
        ['customers'],
        () => {
            return axios('/api/customers') as any;
        }
    );

    console.log(c, customers);
    return (
        <>
            <h1>Customers</h1>
            {customers.map((customer: Customer) => {
                return (
                    <CustomerComponent
                        key={customer._id?.toString()}
                        customer={customer}
                    />
                );
            })}
        </>
    );
};

export default Customers;
