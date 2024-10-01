require("dotenv").config();

const express = require("express");

const app = express();

const port = 4000;

const githubData = {
  login: "Amit0094",
  id: 140780768,
  node_id: "U_kgDOCGQk4A",
  avatar_url: "https://avatars.githubusercontent.com/u/140780768?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Amit0094",
  html_url: "https://github.com/Amit0094",
  followers_url: "https://api.github.com/users/Amit0094/followers",
  following_url: "https://api.github.com/users/Amit0094/following{/other_user}",
  gists_url: "https://api.github.com/users/Amit0094/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Amit0094/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Amit0094/subscriptions",
  organizations_url: "https://api.github.com/users/Amit0094/orgs",
  repos_url: "https://api.github.com/users/Amit0094/repos",
  events_url: "https://api.github.com/users/Amit0094/events{/privacy}",
  received_events_url: "https://api.github.com/users/Amit0094/received_events",
  type: "User",
  site_admin: false,
  name: "Amit",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: " I hold a diploma in Computer Science and Engineering....",
  twitter_username: null,
  public_repos: 14,
  public_gists: 0,
  followers: 1,
  following: 1,
  created_at: "2023-07-28T04:07:36Z",
  updated_at: "2024-08-14T08:33:41Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Amitdotcom");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login at chai aur code .</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Chai aur code .</h2>");
});

app.get('/github', (req, res) => {
  res.json(githubData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
