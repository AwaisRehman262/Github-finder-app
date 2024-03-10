import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Search.css";

export class Search extends Component {
  state = {
    text: "",
  };
  textHandler = (e) => {
    this.setState({ text: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    if (this.state.text == "") {
      this.props.searchAlertHandler("enter a username", "light");
      return;
    }
    this.props.searchHandler(this.state.text);
    this.setState({ text: "" });
  };
  render() {
    return (
      <>
        {this.props.searchAlert && (
          <div className="error-message">
            <i className="fas fa-info-circle"></i> {this.props.searchAlert.msg}
          </div>
        )}
        <form className="form" onSubmit={this.submitHandler}>
          <input
            type="text"
            name="text"
            placeholder="Search Users"
            value={this.state.text}
            onChange={this.textHandler}
          />
          <input type="submit" value={"Search"} />
        </form>
        {this.props.showUsers && (
          <button onClick={this.props.onUserClear}>Clear Users</button>
        )}
      </>
    );
  }
}

Search.Proptype = {
  searchAlert: PropTypes.object.isRequired,
  showUsers: PropTypes.bool.isRequired,
  onUserClear: PropTypes.func.isRequired,
  searchHandler: PropTypes.func.isRequired,
};
export default Search;
