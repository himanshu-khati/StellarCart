import React from "react";
import { useLocation } from "react-router-dom";
import Form from "../components/Form";
import CheckoutSummary from "../components/CheckoutSummary";
const CheckOutLayout = () => {
  const location = useLocation();
  const { totals } = location.state || { totals: {} };
  if (!totals) return null;
  console.log(totals);
  return (
    <div className="w-full flex ">
      <Form />
      <CheckoutSummary totals={totals} />
    </div>
  );
};

export default CheckOutLayout;
