import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Customer: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    console.log(id);
    return <div>Customer {id} </div>;
};

export default Customer;
