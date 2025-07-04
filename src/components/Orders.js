
import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <a to={"/"} className="btn">
          Get started
        </a>
      </div>
    </div>
  );
};

export default Orders;
