import type { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { useRouter } from 'next/router';
import { ScriptProps } from 'next/script';
import { Customer } from '../customers';
import axios, { AxiosError } from 'axios';
import { ParsedUrlQuery } from 'querystring';

type Props = {
    customer?: Customer;
};

interface Params extends ParsedUrlQuery {
    id: string;
}

/*
 * Which of the ID's must you return the data for. If not, then it will return a 404 error on client
 */
export const getStaticPaths: GetStaticPaths = async () => {
    //const result = await axios.get('http://127.0.0.1:8000/api/customers/');
    //const paths = result.data.customers.map((customer: Customer) => {
    //    return {
    //        params: { id: customer.id.toString() },
    //    };
    //});
    // If you comment the line paths and add the paths: [], it is called lazy caching
    // You will get a cache miss the first time and after that it will be a cache hit and will serve the
    // data from cache

    return {
        //paths: paths,
        paths: [],
        fallback: true,
        // Web crawlers use this method to view the actual data being rendered.
        //fallback: 'blocking',
    };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
    context
) => {
    const params = context.params!;

    try {
        const result = await axios.get<{ customer: Customer }>(
            `http://127.0.0.1:8000/api/customers/${params.id}`
        );

        console.log('Returned from Server: ', result);
        return {
            props: {
                customer: result.data.customer,
            },
            // Revalidate after sometime
            revalidate: 60,
        };
    } catch (error) {
        if (error instanceof AxiosError) {
            if (error.response?.status === 404) {
                return {
                    notFound: true,
                    revalidate: 60, // in seconds
                };
            }
        }
        return {
            props: {},
        };
    }
};

const Customer: NextPage<Props> = (props) => {
    const router = useRouter();

    if (router.isFallback) {
        return <p> Loading...</p>;
    }

    return <div>Customer {props.customer ? props.customer.name : null} </div>;
};

export default Customer;
