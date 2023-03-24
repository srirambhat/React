import { useEffect, useState } from 'react';

export default function CryptoSummary(props) {
    const [amount, setAmount] = useState(NaN);

    return (
        <div>
            <span>{props.crypto.name + ' $' + props.crypto.current_price}</span>
            <input
                type="number"
                style={{ margin: 10 }}
                value={amount}
                onChange={(e) => {
                    setAmount(parseFloat(e.target.value));
                    props.updateOwned(props.crypto, parseFloat(e.target.value));
                }}
            ></input>
        </div>
    );
}
