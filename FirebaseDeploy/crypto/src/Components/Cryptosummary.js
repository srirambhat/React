export default function CryptoSummary({ crypto }) {
    return <h4>{crypto.name + ' current price $' + crypto.current_price}</h4>;
}
