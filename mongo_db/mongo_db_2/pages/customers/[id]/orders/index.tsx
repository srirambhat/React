import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Orders: NextPage = () => {
    const router = useRouter();
    console.log(router);
    return <div>All orders for Customer </div>;
};

export default Orders;
