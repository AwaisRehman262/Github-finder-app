import React, { Component } from "react";

import UserItem from "./UserItem/UserItem";
import Loader from "../Common/Loader/Loader";

export class User extends Component {
  viewDetails = (query) => {
    this.props.viewDetails(query);
  };
  render() {
    return (
      <>
        {this.props.loading ? (
          <Loader key={Math.random()} />
        ) : (
          <div style={userStyles}>
            {this.props.users.map((user) => {
              return (
                <UserItem
                  key={user.id}
                  user={user}
                  viewDetails={this.viewDetails}
                />
              );
            })}
          </div>
        )}
      </>
    );
  }
}

const userStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
  gridGap: "1rem",
};

export default User;
