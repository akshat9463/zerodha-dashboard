import React from "react";

const Summary = () => {
  return (
    <div className="container my-4">
      {/* Greeting */}
      <div className="mb-4">
        <h6>Hi, User!</h6>
        <hr />
      </div>

      {/* Equity Section */}
      <div className="bg-light border rounded p-3 mb-4">
        <h6 className="mb-3">Equity</h6>
        <div className="row">
          <div className="col-md-6 text-center mb-3 mb-md-0">
            <h3>3.74k</h3>
            <p className="text-muted mb-0">Margin available</p>
          </div>
          <div className="col-md-6">
            <p className="mb-1">
              Margins used: <span className="fw-semibold">0</span>
            </p>
            <p className="mb-0">
              Opening balance: <span className="fw-semibold">3.74k</span>
            </p>
          </div>
        </div>
      </div>

      {/* Holdings Section */}
      <div className="bg-light border rounded p-3">
        <h6 className="mb-3">Holdings (13)</h6>
        <div className="row">
          <div className="col-md-6 text-center mb-3 mb-md-0">
            <h3 className="text-success">
              1.55k <small className="fw-normal">(+5.20%)</small>
            </h3>
            <p className="text-muted mb-0">P&amp;L</p>
          </div>
          <div className="col-md-6">
            <p className="mb-1">
              Current Value: <span className="fw-semibold">31.43k</span>
            </p>
            <p className="mb-0">
              Investment: <span className="fw-semibold">29.88k</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
