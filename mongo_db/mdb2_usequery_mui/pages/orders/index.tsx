/* eslint-disable react/jsx-no-duplicate-props */
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Container from '@mui/material/Container';
import { GetStaticProps, NextPage } from 'next/types';
import { getCustomerDataFromMongoDB } from '../api/customers';
import { useRouter } from 'next/router';

const columns: GridColDef[] = [
    //{ field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'id',
        headerName: 'Order ID',
        width: 100,
    },
    {
        field: 'customerId',
        headerName: 'Customer ID',
        width: 100,
    },
    {
        field: 'customer',
        headerName: 'Customer',
        width: 150,
        editable: true,
    },
    {
        field: 'description',
        headerName: 'Description',
        type: 'string',
        width: 110,
        editable: true,
    },
    {
        field: 'price',
        headerName: 'Price',
        sortable: false,
        type: 'string',
        width: 160,
    },
];

export const getStaticProps: GetStaticProps = async (context) => {
    const data = await getCustomerDataFromMongoDB();

    console.log('!!!!', data);

    let orders: any = [];

    data.forEach((customer) => {
        console.log('CustomerName:', customer.name, customer.orders);
        if (customer.orders) {
            customer.orders.forEach((order) => {
                console.log(order);
                orders.push({
                    ...order,
                    customer: customer.name,
                    customerId: customer._id,
                    id: order._id,
                    price: order.price.$numberDecimal,
                });
            });
        }
    });

    return {
        props: {
            // orders: data
            //     .map((customer) => {
            //         console.log(customer.orders);
            //         return customer.orders || null;
            //     })
            //     .flat(1)
            //     .filter((order) => {
            //         return order !== null;
            //     }),
            orders: orders,
        },
        revalidate: 60, // In seconds
    };
};

const Orders: NextPage = (props: any) => {
    const { customerId } = useRouter().query;

    console.log('#####', props, customerId);
    return (
        <Container>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    filterModel={{
                        items: [
                            {
                                columnField: 'customerId',
                                operatorValue: 'equals',
                                value: customerId,
                            },
                        ],
                    }}
                    rows={props.orders}
                    columns={columns}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                    initialState={{
                        filter: {
                            filterModel: {
                                items: [
                                    {
                                        columnField: 'customerId',
                                        operatorValue: 'equals',
                                        value: customerId,
                                    },
                                ],
                            },
                        },
                    }}
                />
            </Box>
        </Container>
    );
};

export default Orders;
