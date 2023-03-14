import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { MongoClient, ObjectId } from 'mongodb';
import clientPromise from '../../lib/mongodb';
import { getCustomerDataFromMongoDB } from '../api/customers';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import CustomerComponent from '../../Components/Customer';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

export type Order = {
    description: string;
    price: { $numberDecimal: string };
    _id?: ObjectId;
};

export type Customer = {
    _id?: ObjectId;
    name: string;
    industry: string;
    orders?: Order[];
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
        <Container>
            <Grid container spacing={5} sx={{ mt: 1 }}>
                {customers.map((customer: Customer) => {
                    return (
                        <CustomerComponent
                            key={customer._id?.toString()}
                            customer={customer}
                        />
                    );
                })}
            </Grid>
        </Container>
    );
};

export default Customers;
