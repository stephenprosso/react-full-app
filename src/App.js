import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Table, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faImage,
  faMoneyCheck,
  faSearchDollar,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/fontawesome-svg-core";

class App extends Component {
  state = {
    isLoading: false,
    invoices: [
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
    ],
  };
  remove(id) {
    let updatedInvoices = [...this.state.invoices].filter(i => i.id !== id);
    this.setState({ invoices: updatedInvoices });
  }

  render() {
    const isLoading = this.state.isLoading;
    const allInvoices = this.state.invoices;

    if (isLoading) return <div>Loading.....</div>;

    let invoices = allInvoices.map((invoice) => (
      <tr key={invoice.id}>
        <td>{invoice.Vendor}</td>
        <td>{invoice.Amount}</td>
        <td>{invoice.Invoice}</td>
        <td>{invoice.date}</td>
        <td>
          <Button
            className="btn btn-lg btn-success"
            onClick={() => this.remove(invoice.id)}
          >
            <FontAwesomeIcon icon={faThumbsUp} /> Ok{" "}
          </Button>
        </td>
        <td>
          <Button
            className="btn btn-lg btn-danger"
            onClick={() => this.remove(invoice.id)}
          >
            <FontAwesomeIcon icon={faThumbsDown} /> N-ok{" "}
          </Button>
        </td>
        <td>
          <Button
            className="btn btn-lg btn-info"
            onClick={() => this.remove(invoice.id)}
          >
            <FontAwesomeIcon icon={faMoneyCheck} /> 50%{" "}
          </Button>
        </td>
        <td>
          <Button
            className="btn btn-lg btn-warning"
            onClick={() => this.remove(invoice.id)}
          >
            {" "}
            <FontAwesomeIcon icon={faSearchDollar} /> ??{" "}
          </Button>
        </td>
        <td>
          <Button
            className="btn btn-lg btn-info"
            onClick={() => this.remove(invoice.id)}
          >
            {" "}
            <FontAwesomeIcon icon={faImage} /> Image
          </Button>
        </td>
      </tr>
    ));

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
                <tr>
                  <th>Vendor</th>
                  <th>Amount</th>
                  <th>Invoice #</th>
                  <th>Date</th>
                  <th colSpan="4">Action</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                {this.state.invoices.length === 0 ? (
                  <tr>
                    <td colSpan="9">The Pipper has been paid!</td>
                  </tr>
                ) : (
                  invoices
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
