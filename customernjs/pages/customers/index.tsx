import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
type Customer = {
    id: number;
    name: string;
    industry: string;
};

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            customers: [
                {
                    id: 1,
                    name: 'Microsoft',
                    industry: 'OS',
                },
                {
                    id: 2,
                    name: 'Intel',
                    industry: 'Chips',
                },
                {
                    id: 3,
                    name: 'Google',
                    industry: 'Mobile',
                },
            ],
        },
    };
};

const Customers: NextPage = ({
    customers,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    console.log(customers);
    return (
        <>
            <h1>Customers</h1>
            {customers.map((customer: Customer) => {
                return (
                    <div key={customer.id}>
                        <p> {customer.id}</p>
                        <p> {customer.name}</p>
                        <p> {customer.industry}</p>
                    </div>
                );
            })}
        </>
    );
};

export default Customers;
