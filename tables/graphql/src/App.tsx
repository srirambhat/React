import './App.css';
import { useQuery, gql, useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';
import AddOrder from './AddOrder';

export type Order = {
    id: number;
    description: string;
    totalInCents: number;
};
export type Customer = {
    id: number;
    name: string;
    industry: string;
    orders: Order[];
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
    mutation ADD_DATA($name: String!, $industry: String!) {
        createCustomer(name: $name, industry: $industry) {
            customer {
                id
                name
                industry
            }
        }
    }
`;

function App() {
    const { loading, error, data } = useQuery(GET_DATA);
    const [name, setName] = useState<string>('');
    const [industry, setIndustry] = useState<string>('');

    const [
        createCustomer,
        {
            loading: createCustomerLoading,
            error: createCustomerError,
            data: createCustomerData,
        },
    ] = useMutation(MUTATE_DATA, {
        refetchQueries: [
            { query: GET_DATA }, // DocumentNode object parsed with gql
        ],
    });

    useEffect(() => {
        console.log('loading: ', loading, 'error: ', error, 'data: ', data);
        console.log(
            'CCL:',
            createCustomerLoading,
            'CCE:',
            createCustomerError,
            'CCD:',
            createCustomerData
        );
    });

    return (
        <div className="App">
            <h1> Customers</h1>
            {error ? <p>Something went wrong </p> : null}
            {loading ? <p>Loading data from backend </p> : null}
            {data
                ? data.customers.map((customer: Customer) => {
                      return (
                          <div key={customer.id}>
                              <h2>
                                  {customer.name +
                                      ' ( ' +
                                      customer.industry +
                                      ' ) '}
                              </h2>
                              {customer.orders.map((order: Order) => {
                                  return (
                                      <div key={order.id}>
                                          <> {order.description + ' '}</>$
                                          {(
                                              order.totalInCents / 100
                                          ).toLocaleString(undefined, {
                                              minimumFractionDigits: 2,
                                              maximumFractionDigits: 2,
                                          })}
                                      </div>
                                  );
                              })}
                              <AddOrder customerId={customer.id} />
                          </div>
                      );
                  })
                : null}
            <h3> Add a Customer</h3>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log('submitting...');
                    console.log('name: ', name, 'industry: ', industry);
                    createCustomer({
                        variables: { name: name, industry: industry },
                    });
                    if (!createCustomerError) {
                        setName('');
                        setIndustry('');
                    }
                }}
            >
                <div>
                    <label htmlFor="name">Name: </label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                </div>
                <br></br>
                <div>
                    <label htmlFor="industry">Industry: </label>
                    <input
                        id="industry"
                        type="text"
                        value={industry}
                        onChange={(e) => {
                            setIndustry(e.target.value);
                        }}
                    />
                </div>
                <br></br>
                <button disabled={createCustomerLoading ? true : false}>
                    Add Customer
                </button>
                {createCustomerError ? <p>Error Creating Customer</p> : null}
            </form>
        </div>
    );
}

export default App;
