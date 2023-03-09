import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';
import { Customer } from '@/pages/customers';

type Return = {
    customers: Customer[];
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
export default async (req: NextApiRequest, res: NextApiResponse<Return>) => {
    const data = await getCustomerDataFromMongoDB();

    res.status(200).json({ customers: data });
};
