import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Info from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';
import { margin } from '@mui/system';
import { Padding } from '@mui/icons-material';

import { Customer } from '../pages/customers';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

type props = {
    customer: Customer;
};

const Customer = ({ customer }: props) => {
    return (
        <Grid item>
            <span
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}
            >
                <Tooltip title={customer._id?.toString()}>
                    <PersonIcon fontSize="small" style={{ marginRight: 5 }} />
                </Tooltip>
                {customer.name}
            </span>
            <p> {customer.industry}</p>
            <Link
                href={{
                    pathname: '/orders',
                    query: {
                        customerId: customer._id?.toString(),
                    },
                }}
            >
                <Button variant="contained">View Orders</Button>
            </Link>
        </Grid>
    );
};

export default Customer;
