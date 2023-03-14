import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';
import { Customer } from '@/pages/customers';
import { ObjectId } from 'mongodb';
import NextCors from 'nextjs-cors';

type Return = {
    customers: Customer[];
};

export const postCustomerDataToMongoDB = async (
    customer: Customer
): Promise<ObjectId> => {
    const mongoCLient = await clientPromise;

    const response = await mongoCLient
        .db()
        .collection('customers')
        .insertOne(customer);

    return response.insertedId;
};

export const getCustomerDataFromMongoDB = async (): Promise<Customer[]> => {
    const mongoCLient = await clientPromise;

    const data = (await mongoCLient
        .db()
        .collection('customers')
        .find()
        .toArray()) as Customer[];

    return JSON.parse(JSON.stringify(data));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default async (
    req: NextApiRequest,
    res: NextApiResponse<Return | ObjectId | { error: string }>
) => {
    await NextCors(req, res, {
        methods: ['GET', 'POST'],
        //origin: '*',
        origin: ['http://localhost:3001', 'http://localhost:3002'],
        optionsSuccessStatus: 200,
    });

    if (req.method === 'GET') {
        const data = await getCustomerDataFromMongoDB();

        res.status(200).json({ customers: data });
    } else if (req.method == 'POST') {
        //expect a customer name & industry
        console.log(req.body);

        if (req.body.name && req.body.industry) {
            const customer: Customer = {
                name: req.body.name,
                industry: req.body.industry,
            };
            const insertedId = await postCustomerDataToMongoDB(customer);
            res.revalidate('/customers');
            res.revalidate('/customers/' + insertedId);
            res.status(200).json(insertedId);
        } else {
            res.status(400).json({ error: 'name and industry are required' });
        }
    }
};
