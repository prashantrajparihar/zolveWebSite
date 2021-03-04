import axios from "axios";
import React, { Component } from "react";
import BarChart from "./BarChart";
import "../../styles/styles.css";

class QueryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "",
      pageSize: 30,
      displayFromDate: "",
      fromDate: "",
      displayToDate: "",
      toDate: "",
      value: [],
    };
    this.handlePage = this.handlePage.bind(this);
    this.handlePageSize = this.handlePageSize.bind(this);
    this.handleFromDate = this.handleFromDate.bind(this);
    this.handleToDate = this.handleToDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.fetchapi = this.fetchapi.bind(this);
  }
  handlePage(event) {
    this.setState({ page: event.target.value });
  }
  handlePageSize(event) {
    this.setState({ pageSize: event.target.value });
  }
  handleFromDate(event) {
    console.log(new Date(event.target.value));
    this.setState({ displayFromDate: event.target.value });
    const date = new Date(event.target.value);
    const dateUTC = (strDate) => Date.parse(strDate) / 1000;
    console.log(dateUTC(date));
    this.setState({ fromDate: dateUTC(date) });
  }
  handleToDate(event) {
    this.setState({ displayToDate: event.target.value });
    const date = new Date(event.target.value);
    const dateUTC = (strDate) => Date.parse(strDate) / 1000;
    this.setState({ toDate: dateUTC(date) });
  }

  handleSubmit(event) {
    let str = `https://api.stackexchange.com/2.2/tags?${
      this.state.page ? `page=${this.state.page}&` : ""
    }${this.state.pageSize ? `pagesize=${this.state.pageSize}&` : ""}${
      this.state.fromDate ? `fromdate=${this.state.fromDate}&` : ""
    }${
      this.state.toDate ? `todate=${this.state.toDate}&` : ""
    }order=desc&sort=popular&site=stackoverflow`;
    this.setState({
      str: str,
    });

    axios.get(str).then((res) => {
      console.log(res.data.items);
      this.setState({ value: res.data.items });
      console.log(this.state);
    });
    event.preventDefault();
  }

  render() {
    return (
      <>
        <div className="queryForm">
          <form onSubmit={this.handleSubmit}>
            <div className="formStyle">
              <div className="pagex">
                <label>
                  Page:<br></br>
                  <input
                    type="text"
                    value={this.state.page}
                    onChange={this.handlePage}
                  />
                </label>
              </div>
              <div className="pageSize">
                <label>
                  PageSize:<br></br>
                  <input
                    type="text"
                    value={this.state.pageSize}
                    onChange={this.handlePageSize}
                  />
                </label>
              </div>
              <div className="fromDate">
                <label>
                  From Date:<br></br>
                  <input
                    type="date"
                    value={this.state.displayFromDate}
                    onChange={this.handleFromDate}
                  />
                </label>
              </div>
              <div className="toDate">
                <label>
                  ToDate:<br></br>
                  <input
                    type="date"
                    value={this.state.displayToDate}
                    onChange={this.handleToDate}
                  />
                </label>
              </div>
              <br />
              <div className="submit">
                <input type="submit" value="Submit" />
              </div>
            </div>
          </form>

          {console.log("||||||||||||||||", this.state.value)}
          {this.state.value.length ? (
            <BarChart value={this.state.value} />
          ) : (
            <h1 className="headingForBarQuery">Select Your Desired Query</h1>
          )}
        </div>
      </>
    );
  }
}

export default QueryForm;
