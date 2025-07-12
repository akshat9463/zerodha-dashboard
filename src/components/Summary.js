import React from "react";

const Summary = () => {
  return (
    <div className="container my-4">
      {/* Greeting */}
      <div className="mb-4">
        <h5 className="fw-bold">Hi, User!</h5>
        <hr />
      </div>

      {/* Equity Section */}
      <div className="bg-light border rounded-3 p-3 mb-4 shadow-sm">
        <h6 className="fw-semibold mb-3 text-primary">Equity</h6>
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-center mb-3 mb-md-0">
            <h3 className="mb-1">₹3.74k</h3>
            <p className="text-muted">Margin available</p>
          </div>
          <div className="col-12 col-md-6">
            <p className="mb-1">
              Margins used: <span className="fw-semibold">₹0</span>
            </p>
            <p className="mb-0">
              Opening balance: <span className="fw-semibold">₹3.74k</span>
            </p>
          </div>
        </div>
      </div>

      {/* Holdings Section */}
      <div className="bg-light border rounded-3 p-3 shadow-sm">
        <h6 className="fw-semibold mb-3 text-success">Holdings (13)</h6>
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-center mb-3 mb-md-0">
            <h3 className="text-success mb-1">
              ₹1.55k <small className="fw-normal text-muted">(+5.20%)</small>
            </h3>
            <p className="text-muted">P&amp;L</p>
          </div>
          <div className="col-12 col-md-6">
            <p className="mb-1">
              Current Value: <span className="fw-semibold">₹31.43k</span>
            </p>
            <p className="mb-0">
              Investment: <span className="fw-semibold">₹29.88k</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
