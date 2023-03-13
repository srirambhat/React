import "../App.css";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Customers = () => {
  const CustQuery = useQuery(
    ["Customers"],
    () => {
      return axios("http://localhost:3000/api/customers");
    },
    {
      cacheTime: 0, // If backend changes, then you will see it on next display
      refetchOnWindowFocus: false, // dont refetch on window refocus
    }
  );

  if (CustQuery?.isLoading) return "Loading...";
  if (CustQuery?.error) return "An error occured: " + CustQuery?.error.message;

  console.log(CustQuery?.data?.data?.data);

  return (
    <div>
      <>
        <h1>Customers</h1>
        {CustQuery?.data?.data?.customers.map((customer) => {
          return (
            <div key={customer._id?.toString()}>
              <> {customer._id?.toString() + ":"}</>
              <> {customer.name + "  ("}</>
              <> {customer.industry + ")"}</>
            </div>
          );
        })}
      </>
    </div>
  );
};

export default Customers;
