import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../Common/Loader/Loader";
import "./UserInfo.css";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { UseUser } from "../../../store/context";

const UserInfo = () => {
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState("");
  const { login } = UseUser();

  const navigateTo = useNavigate();

  const fetchData = async () => {
    if (login == "") {
      setTimeout(() => {
        navigateTo("/");
      }, 1);
      return null;
    }
    try {
      const URL = `https://api.github.com/users/${login}?client_id=${
        import.meta.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${import.meta.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
      const res = await axios.get(URL);
      setUser(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  useEffect(() => fetchData, []);

  const copyToClipboard = async (text) => {
    navigator.clipboard.writeText(text);
    console.log(text);
  };
  return (
    <>
      <ArrowBack key={user.id} onClick={() => navigateTo("/")} />
      {loading ? (
        <Loader key={user.id} />
      ) : (
        <>
          <div className="user-info-container">
            <img src={user.avatar_url} alt="User Avatar" />

            <h2>User Information</h2>
            <ul className="user-info-list">
              <li>
                <strong onClick={() => copyToClipboard(user.html_url)}>
                  Login/username:
                </strong>{" "}
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {user.login}
                </a>
              </li>
              <li>
                <strong onClick={() => copyToClipboard(user.id)}>ID:</strong>{" "}
                {user.id}
              </li>
              <li>
                <strong onClick={() => copyToClipboard(user.avatar_url)}>
                  Avatar URL:
                </strong>
                <a
                  href={user.avatar_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {user.avatar_url}
                </a>
              </li>
              <li>
                <strong onClick={() => copyToClipboard(user.url)}>URL:</strong>{" "}
                <a href={user.url} target="_blank" rel="noopener noreferrer">
                  {user.url}
                </a>
              </li>
              <li>
                <strong onClick={() => copyToClipboard(user.html_url)}>
                  HTML URL:
                </strong>{" "}
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {user.html_url}
                </a>
              </li>
              <li>
                <strong onClick={() => copyToClipboard(user.followers_url)}>
                  Followers URL:
                </strong>{" "}
                <a
                  href={user.followers_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {user.followers_url}
                </a>
              </li>
              <li>
                <strong onClick={() => copyToClipboard(user.following_url)}>
                  Following URL:
                </strong>{" "}
                <a
                  href={user.following_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {user.following_url}
                </a>
              </li>
              <li>
                <strong onClick={() => copyToClipboard(user.gists_url)}>
                  Gists URL:
                </strong>{" "}
                <a href={user.gists_url}>{user.gists_url}</a>
              </li>
              <li>
                <strong onClick={() => copyToClipboard(user.starred_url)}>
                  Starred URL:
                </strong>{" "}
                <a
                  href={user.starred_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {user.starred_url}
                </a>
              </li>
              <li>
                <strong onClick={() => copyToClipboard(user.subscriptions_url)}>
                  Subscriptions URL:
                </strong>{" "}
                <a href={user.subscriptions_url}>{user.subscriptions_url}</a>
              </li>
              <li>
                <strong onClick={() => copyToClipboard(user.organizations_url)}>
                  Organizations URL:
                </strong>{" "}
                <a
                  href={user.organizations_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {user.organizations_url}
                </a>
              </li>
              <li>
                <strong onClick={() => copyToClipboard(user.repos_url)}>
                  Repos URL:
                </strong>{" "}
                <a
                  href={user.repos_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {user.repos_url}
                </a>
              </li>
              <li>
                <strong onClick={() => copyToClipboard(user.events_url)}>
                  Events URL:
                </strong>{" "}
                <a
                  href={user.events_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {user.events_url}
                </a>
              </li>
              <li>
                <strong
                  onClick={() => copyToClipboard(user.received_events_url)}
                >
                  Received Events URL:
                </strong>{" "}
                <a href={user.received_events_url}>
                  {user.received_events_url}
                </a>
              </li>
              <li>
                <strong>Type:</strong> {user.type}
              </li>
              <li>
                <strong>Site Admin:</strong>{" "}
                <span>{user.site_admin.toString()}</span>
              </li>
              <li>
                <strong>Name:</strong> {user.name.toString()}
              </li>
              <li>
                <strong onClick={() => copyToClipboard(user.company)}>
                  Company:
                </strong>{" "}
                {user.company !== null ? user.company : "not specified"}
              </li>
              <li>
                <strong onClick={() => copyToClipboard(user.blog)}>
                  Blog:
                </strong>{" "}
                {user.blog == "" ? (
                  "not specified"
                ) : (
                  <a href={user.blog} target="_blank" rel="noopener noreferrer">
                    {user.blog}
                  </a>
                )}
              </li>
              <li>
                <strong>Location:</strong> {user.location}
              </li>
              <li>
                <strong onClick={() => copyToClipboard(user.email)}>
                  Email:
                </strong>{" "}
                {user.email == null ? "not specified" : user.email}
              </li>
              <li>
                <strong onClick={() => copyToClipboard(user.hireable)}>
                  Hireable:
                </strong>{" "}
                <span>{user.hireable ? "true" : "false"}</span>
              </li>
              <li>
                <strong onClick={() => copyToClipboard(user.bio)}>Bio:</strong>{" "}
                {user.bio == null ? "not specified" : user.bio}
              </li>
              <li>
                <strong onClick={() => copyToClipboard(user.twitter_username)}>
                  Twitter Username:
                </strong>{" "}
                {user.twitter_username == null
                  ? "not specified"
                  : user.twitter_username}
              </li>
              <li>
                <strong onClick={() => copyToClipboard(user.public_repos)}>
                  Public Repos:
                </strong>{" "}
                {user.public_repos}
              </li>
              <li>
                <strong onClick={() => copyToClipboard(user.public_gists)}>
                  Public Gists:
                </strong>{" "}
                {user.public_gists}
              </li>
              <li>
                <strong onClick={() => copyToClipboard(user.followers)}>
                  Followers:
                </strong>{" "}
                {user.followers}
              </li>
              <li>
                <strong onClick={() => copyToClipboard(user.following)}>
                  Following:
                </strong>{" "}
                {user.following}
              </li>
              <li>
                <strong onClick={() => copyToClipboard(user.created_at)}>
                  Created At:
                </strong>{" "}
                {user.created_at}
              </li>
              <li>
                <strong onClick={() => copyToClipboard(user.updated_at)}>
                  Updated At:
                </strong>{" "}
                {user.updated_at}
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default UserInfo;
