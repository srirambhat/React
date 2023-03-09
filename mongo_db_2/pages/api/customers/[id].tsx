import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';
import { Customer } from '@/pages/customers';
import { ObjectId } from 'mongodb';
import { get } from 'https';

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

// eslint-disable-next-line import/no-anonymous-default-export
export default async (
    req: NextApiRequest,
    res: NextApiResponse<{ customer: Customer } | string>
) => {
    const id = req.query.id!;
    const data = await getSingleCustomer(new ObjectId(id as string));

    if (!data) {
        res.status(404).json('Customer not found');
    }
    res.status(200).json({ customer: data });
};
