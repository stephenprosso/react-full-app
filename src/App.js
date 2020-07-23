import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Table, Button } from "reactstrap";

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
        Invoice: "001",
        date: "01/20/2020",
      },
      {
        id: "101",
        Vendor: "Handbook",
        Amount: "$19,000",
        Invoice: "002",
        date: "02/22/2020",
      },
      {
        id: "102",
        Vendor: "Handbook",
        Amount: "$20,000",
        Invoice: "003",
        date: "03/30/2020",
      },
    ];
    if (isLoading) return <div>Loading.....</div>;

    return (
      <div className="container border border-secondary rounded center">
        <div className="row">
          <div className="col-12">
            <h4>Pending Invoices - BiggCloud</h4>
          </div>
        </div>
        <div className="row">
          <div className=".col-xs-12 center text-center">
            <Table dark responsive striped bordered hover>
              <thead>
                <th>Vendor</th>
                <th>Amount</th>
                <th>Invoice #</th>
                <th>Date</th>
                <th colSpan="4">Action</th>
                <th>Image</th>
              </thead>
              <tbody>


              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
