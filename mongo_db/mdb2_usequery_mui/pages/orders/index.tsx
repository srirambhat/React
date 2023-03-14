import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Container from '@mui/material/Container';
import { GetStaticProps, NextPage } from 'next/types';
import Customer from '@/Components/Customer';
import { getCustomerDataFromMongoDB } from '../api/customers';

const columns: GridColDef[] = [
    //{ field: 'id', headerName: 'ID', width: 90 },
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

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
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
    console.log(props);
    return (
        <Container>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={props.orders}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>
        </Container>
    );
};

export default Orders;
