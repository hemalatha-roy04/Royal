import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import About from "./About";
import Contact from "./Contact";
import Blogs from "./Blogs";
import Home from "./Home";
import Layout from "./Layout";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <About />
    <Contact />
    <Blogs />
    <Layout />
    <Home />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
