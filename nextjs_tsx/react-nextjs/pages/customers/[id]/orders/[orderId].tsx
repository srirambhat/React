import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Order: NextPage = () => {
    const router = useRouter();
    const { orderId, id } = router.query;

    console.log(orderId);
    return (
        <div>
            Order {orderId} from customer {id}
        </div>
    );
};

export default Order;
