import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <div className="container my-4">
      {/* Top UPI message and buttons */}
      <div className="text-center mb-4">
        <p className="fs-5">Instant, zero-cost fund transfers with UPI</p>
        <div className="d-flex justify-content-center gap-3">
          <button className="btn btn-success">Add funds</button>
          <button className="btn btn-primary">Withdraw</button>
        </div>
      </div>

      {/* Equity and Commodity Section */}
      <div className="row">
        {/* Equity Info */}
        <div className="col-md-8 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Equity</h5>

              <div className="row">
                <div className="col-6 mb-3">
                  <p className="mb-1 fw-semibold">Available margin</p>
                  <p className="text-success fw-bold">₹4,043.10</p>
                </div>
                <div className="col-6 mb-3">
                  <p className="mb-1 fw-semibold">Used margin</p>
                  <p className="fw-bold">₹3,757.30</p>
                </div>
                <div className="col-6 mb-3">
                  <p className="mb-1 fw-semibold">Available cash</p>
                  <p className="fw-bold">₹4,043.10</p>
                </div>
              </div>

              <hr />

              <div className="row">
                <div className="col-md-4 col-6 mb-3">
                  <p className="mb-1">Opening Balance</p>
                  <p>₹4,043.10</p>
                </div>
                <div className="col-md-4 col-6 mb-3">
                  <p className="mb-1">Closing Balance</p>
                  <p>₹3,736.40</p>
                </div>
                <div className="col-md-4 col-6 mb-3">
                  <p className="mb-1">Payin</p>
                  <p>₹4,064.00</p>
                </div>
                <div className="col-md-4 col-6 mb-3">
                  <p className="mb-1">SPAN</p>
                  <p>₹0.00</p>
                </div>
                <div className="col-md-4 col-6 mb-3">
                  <p className="mb-1">Delivery margin</p>
                  <p>₹0.00</p>
                </div>
                <div className="col-md-4 col-6 mb-3">
                  <p className="mb-1">Exposure</p>
                  <p>₹0.00</p>
                </div>
                <div className="col-md-4 col-6 mb-3">
                  <p className="mb-1">Options premium</p>
                  <p>₹0.00</p>
                </div>
              </div>

              <hr />

              <div className="row">
                <div className="col-md-4 col-6 mb-3">
                  <p className="mb-1">Collateral (Liquid funds)</p>
                  <p>₹0.00</p>
                </div>
                <div className="col-md-4 col-6 mb-3">
                  <p className="mb-1">Collateral (Equity)</p>
                  <p>₹0.00</p>
                </div>
                <div className="col-md-4 col-6 mb-3">
                  <p className="mb-1 fw-semibold">Total Collateral</p>
                  <p className="fw-bold">₹0.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Commodity Info */}
        <div className="col-md-4 mb-4">
          <div className="card h-100 text-center">
            <div className="card-body d-flex flex-column justify-content-center">
              <p className="mb-3">You don't have a commodity account</p>
              <button className="btn btn-primary">Open Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;
