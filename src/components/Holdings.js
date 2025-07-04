import { holdings } from "../data/data";
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(()=>{
     axios.get("http://localhost:8080/allHoldings").then((res)=>{
      setAllHoldings(res.data);
     });
  },[]);

  const labels = allHoldings.map((subArray)=> subArray["name"]);
  const data = {
    labels,
     datasets: [
    {
      label: 'Stock Price',
      data: allHoldings.map((stock) => stock.price ),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ]
  }


//   const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

   return (
    <div className="container my-4">
      {/* Title */}
      <h3 className="mb-4">Holdings ({allHoldings.length})</h3>

      {/* Responsive Table */}
      <div className="table-responsive mb-4">
        <table className="table table-bordered table-hover text-center align-middle">
          <thead className="table-light">
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&amp;L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const currValue = stock.price * stock.qty;
              const isProfit = currValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "text-success" : "text-danger";
              const dayClass = stock.isLoss ? "text-danger" : "text-success";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{currValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(currValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Summary Row */}
      <div className="row text-center mb-4">
        <div className="col-md-4 mb-3">
          <h5>
            ₹29,875.<span>55</span>
          </h5>
          <p className="text-muted mb-0">Total investment</p>
        </div>
        <div className="col-md-4 mb-3">
          <h5>
            ₹31,428.<span>95</span>
          </h5>
          <p className="text-muted mb-0">Current value</p>
        </div>
        <div className="col-md-4 mb-3">
          <h5 className="text-success">₹1,553.40 (+5.20%)</h5>
          <p className="text-muted mb-0">P&amp;L</p>
        </div>
      </div>

      {/* Graph Component */}
      <VerticalGraph data={data} />
    </div>
  );
};

export default Holdings;
