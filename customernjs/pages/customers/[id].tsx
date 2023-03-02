import type { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { useRouter } from 'next/router';
import { ScriptProps } from 'next/script';
import { Customer } from '../customers';
import axios from 'axios';
import { ParsedUrlQuery } from 'querystring';

type Props = {
    customer: Customer;
};

interface Params extends ParsedUrlQuery {
    id: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
    const result = await axios.get('http://127.0.0.1:8000/api/customers/');
    const paths = result.data.customers.map((customer: Customer) => {
        return {
            params: { id: customer.id.toString() },
        };
    });

    return {
        //        paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
        paths: paths,
        fallback: false,
    };
};
export const getStaticProps: GetStaticProps<Props, Params> = async (
    context
) => {
    const params = context.params!;

    // request for the data --> dB, API
    const result = await axios.get<{ customer: Customer }>(
        `http://127.0.0.1:8000/api/customers/${params.id}`
    );
    console.log('Restult1:', result);

    return {
        props: {
            customer: result.data.customer.name,
        },
    };
};

const Customer: NextPage<Props> = (props) => {
    const router = useRouter();
    const { id } = router.query;

    console.log(props);
    return <div>Customer {props.customer} </div>;
};

export default Customer;
