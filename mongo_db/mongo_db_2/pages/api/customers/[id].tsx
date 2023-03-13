import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';
import { Customer } from '@/pages/customers';
import { ObjectId } from 'mongodb';
import { get } from 'https';
import customers from '.';

export const getSingleCustomer = async (
    id: string | ObjectId
): Promise<Customer> => {
    const mongoClient = await clientPromise;
    id = typeof id === 'string' ? new ObjectId(id) : id;

    const data = (await mongoClient
        .db()
        .collection('customers')
        .findOne({ _id: id })) as Customer;

    console.log(data);

    return data;
};

export const editCustomer = async (
    id: string | ObjectId,
    customer: Customer
) => {
    const mongoClient = await clientPromise;
    id = typeof id === 'string' ? new ObjectId(id) : id;

    const response = await mongoClient
        .db()
        .collection('customers')
        .replaceOne({ _id: id }, customer);

    console.log(response);

    return response;
};

export const deleteCustomer = async (id: string | ObjectId) => {
    const mongoClient = await clientPromise;
    id = typeof id === 'string' ? new ObjectId(id) : id;

    const response = await mongoClient
        .db()
        .collection('customers')
        .deleteOne({ _id: id });

    console.log(response);

    return response;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default async (
    req: NextApiRequest,
    res: NextApiResponse<
        | { customer: Customer }
        | { modifiedCount: number }
        | { deletedCount: number }
        | { error: string }
        | string
    >
) => {
    const id = req.query.id!;

    if (req.method === 'GET') {
        const data = await getSingleCustomer(id as string);

        if (!data) {
            res.status(404).json('Customer not found');
        }
        res.status(200).json({ customer: data });
    } else if (req.method == 'PUT') {
        const data = await editCustomer(id as string, {
            name: req.body.name,
            industry: req.body.industry,
        });
        if (data.modifiedCount > 0)
            res.status(200).json({ modifiedCount: data.modifiedCount });
        else res.status(404).json({ error: 'Customer not found' });
    } else if (req.method == 'DELETE') {
        const data = await deleteCustomer(id as string);
        if (data.deletedCount > 0)
            res.status(200).json({ deletedCount: data.deletedCount });
        else res.status(404).json({ error: 'Customer not found' });
    }
};
