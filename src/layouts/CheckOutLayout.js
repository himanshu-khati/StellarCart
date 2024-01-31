import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Form from "../components/Form";
import CheckoutSummary from "../components/CheckoutSummary";
const CheckOutLayout = () => {
  const location = useLocation();
  const { totals } = location.state || { totals: {} };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (!totals) return null;
  return (
    <div className="w-full flex lg:flex-row flex-col  ">
      <Form />
      <CheckoutSummary totals={totals} />
    </div>
  );
};

export default CheckOutLayout;
