import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/Common/Navbar/Navbar";
import User from "./component/Users/User";
import Search from "./component/Common/Search/Search";
import UserInfo from "./component/Users/UserInfo/UserInfo";

import "./App.css";
import { UseUser } from "./store/context";
import { Alert } from "@mui/material";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchAlert, setSearchAlert] = useState(null);

  const { login, setLogin } = UseUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const URL = "https://api.github.com/users";
        const res = await axios.get(URL);
        setUsers(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const searchAlertHandler = (msg, style) => {
    setSearchAlert({
      msg,
      style,
    });
    setTimeout(() => setSearchAlert(null), 3000);
  };
  const searchHandler = async (query) => {
    try {
      setLoading(true);

      const URL = `https://api.github.com/search/users?q=${query}&client_id=${
        import.meta.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${import.meta.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
      const res = await axios.get(URL);
      setUsers(res.data.items);
      setLoading(false);
    } catch (error) {
      console.error("Error searching users:", error);
    }
  };

  const viewDetails = (query) => {
    setLogin(query);
  };

  const userClearHandler = () => {
    setUsers([]);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={[
              <Search
                searchHandler={searchHandler}
                onUserClear={userClearHandler}
                showUsers={users.length > 0 ? true : false}
                searchAlert={searchAlert}
                searchAlertHandler={searchAlertHandler}
              />,
              <User
                users={users}
                loading={loading}
                viewDetails={viewDetails}
              />,
            ]}
          />
          <Route path="/user" element={<UserInfo login={login} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
