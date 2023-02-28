import { useState } from 'react';

export type AppProps = {
    customerId: Number;
};

export default function AddOrder({ customerId }: AppProps) {
    const [active, setActive] = useState(false);
    const [description, setDescription] = useState<string>('');
    const [cost, setCost] = useState<number>(NaN);

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
                            console.log(customerId, description, cost);
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
                                value={isNaN(cost) ? '' : cost}
                                onChange={(e) => {
                                    setCost(parseFloat(e.target.value));
                                }}
                            />
                        </div>
                        <br></br>
                        {/*}
                        <button disabled={createCustomerLoading ? true : false}>
                            Add Customer
                        </button>
                        {createCustomerError ? (
                            <p>Error Creating Customer</p>
                        ) : null}
                        */}
                        <button> Add order </button>
                    </form>
                </div>
            ) : null}
        </div>
    );
}
