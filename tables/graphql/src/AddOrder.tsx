import { useEffect, useState } from 'react';
import { gql, useMutation } from '@apollo/client';

export type AppProps = {
    customerId: Number;
};

const GET_DATA = gql`
    {
        customers {
            id
            name
            industry
            orders {
                id
                description
                totalInCents
            }
        }
    }
`;

const MUTATE_DATA = gql`
    mutation MUTATE_DATA(
        $description: String!
        $totalInCents: Int!
        $customer: ID
    ) {
        createOrder(
            customer: $customer
            description: $description
            totalInCents: $totalInCents
        ) {
            order {
                id
                customer {
                    id
                    name
                    industry
                }
                description
                totalInCents
            }
        }
    }
`;

export default function AddOrder({ customerId }: AppProps) {
    const [active, setActive] = useState(false);
    const [description, setDescription] = useState<string>('');
    const [totalInCents, setTotalInCents] = useState<number>(NaN);

    const [createOrder, { loading, error, data }] = useMutation(MUTATE_DATA, {
        refetchQueries: [
            { query: GET_DATA }, // DocumentNode object parsed with gql
        ],
    });

    useEffect(() => {
        if (data) {
            console.log(data);
            setDescription('');
            setTotalInCents(NaN);
        }
    }, [data]);

    return (
        <div>
            {active ? null : (
                <button
                    onClick={(e) => {
                        setActive(true);
                        console.log('customerId:', customerId);
                    }}
                >
                    +New Order
                </button>
            )}
            {active ? (
                <div>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            console.log(customerId, description, totalInCents);
                            createOrder({
                                variables: {
                                    customer: customerId,
                                    description: description,
                                    totalInCents: totalInCents * 100,
                                },
                            });
                        }}
                    >
                        <div>
                            <label htmlFor="description">Description: </label>
                            <input
                                id="description"
                                type="text"
                                value={description}
                                onChange={(e) => {
                                    setDescription(e.target.value);
                                }}
                            />
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor="cost">Cost: </label>
                            <input
                                id="cost"
                                type="number"
                                value={isNaN(totalInCents) ? '' : totalInCents}
                                onChange={(e) => {
                                    setTotalInCents(parseFloat(e.target.value));
                                }}
                            />
                        </div>
                        <br></br>

                        <button disabled={loading ? true : false}>
                            Add order
                        </button>
                    </form>
                    {error ? <p> Something went wrong</p> : null}
                </div>
            ) : null}
        </div>
    );
}
