import React from "react";

const Funds = () => {
  return (
    <div className="container-fluid p-3">
      {/* UPI Message & Buttons */}
      <div className="text-center mb-4">
        <p className="fs-6 fw-semibold">
          Instant, zero-cost fund transfers with UPI
        </p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <button className="btn btn-success">Add funds</button>
          <button className="btn btn-primary">Withdraw</button>
        </div>
      </div>

      {/* Equity + Commodity Cards */}
      <div className="row">
        {/* Equity Info */}
        <div className="col-12 col-md-8 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Equity</h5>
              <hr/>
              <div className="row">
                <div className="col-12 mb-3 col-sm-6">
                  <p className="mb-1 fw-semibold">Available margin</p>
                  <p className="text-success fw-bold">₹4,043.10</p>
                </div>
                <div className="col-12 mb-3 col-sm-6">
                  <p className="mb-1 fw-semibold">Used margin</p>
                  <p className="fw-bold">₹3,757.30</p>
                </div>
                <div className="col-12 mb-3 col-sm-6">
                  <p className="mb-1 fw-semibold">Available cash</p>
                  <p className="fw-bold">₹4,043.10</p>
                </div>
              </div>

              <hr />

              {/* Margins section */}
              <div className="row">
                {[
                  ["Opening Balance", "₹4,043.10"],
                  ["Closing Balance", "₹3,736.40"],
                  ["Payin", "₹4,064.00"],
                  ["SPAN", "₹0.00"],
                  ["Delivery margin", "₹0.00"],
                  ["Exposure", "₹0.00"],
                  ["Options premium", "₹0.00"],
                ].map(([label, value], i) => (
                  <div className="col-12 col-sm-4 mb-3" key={i}>
                    <p className="mb-1">{label}</p>
                    <p>{value}</p>
                  </div>
                ))}
              </div>

              <hr />

              {/* Collateral */}
              <div className="row">
                {[
                  ["Collateral (Liquid funds)", "₹0.00"],
                  ["Collateral (Equity)", "₹0.00"],
                  ["Total Collateral", "₹0.00", "fw-bold"],
                ].map(([label, value, extraClass], i) => (
                  <div className="col-12 col-sm-4 mb-3" key={i}>
                    <p className={`mb-1 ${extraClass ? "fw-semibold" : ""}`}>{label}</p>
                    <p className={extraClass || ""}>{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Commodity Info */}
        <div className="col-12 col-md-4 mb-4">
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
