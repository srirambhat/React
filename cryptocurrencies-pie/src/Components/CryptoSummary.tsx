import { Crypto } from '../Types';
import { useEffect, useState } from 'react';

export type AppProps = {
    crypto: Crypto;
};
export default function CryptoSummary({ crypto }: AppProps): JSX.Element {
    useEffect(() => {
        console.log(
            crypto.name,
            amount,
            crypto.current_price * parseFloat(amount)
        );
    });

    const [amount, setAmount] = useState<string>(String);
    return (
        <div>
            <span>{crypto.name + ' $' + crypto.current_price}</span>
            <input
                type="number"
                style={{ margin: 10 }}
                defaultValue={amount}
                onChange={(e) => {
                    setAmount(e.target.value);
                }}
            ></input>
            <p>
                $
                {(crypto.current_price * parseFloat(amount)).toLocaleString(
                    undefined,
                    { minimumFractionDigits: 2, maximumFractionDigits: 2 }
                )}
            </p>
        </div>
    );
}
