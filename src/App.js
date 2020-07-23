import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  state = {
    isLoading: false,
    invoices: [],
  };
  render() {
    const isLoading = this.state.isLoading;
    const invoices = this.state.invoices;
    const body = [
      {  
        id: "100",
        Vendor: "Handbook",
        Amount: "$18,000",
        date: "01/20/2020",
      },
      {
        id: "101",
        Vendor: "Handbook",
        Amount: "$18,000",
        date: "01/20/2020",
      },
      {
        id: "102",
        Vendor: "Handbook",
        Amount: "$18,000",
        date: "01/20/2020",
      },
    ];
    if (isLoading) return <div>Loading.....</div>;

    return <div className="container border border-secondary rounded center">
      <div className="row">
        <div className="col-12">
          <h4>Pending Invoices - BiggCloud</h4>
        </div>

      </div>

    </div>;
  }
}

export default App;
