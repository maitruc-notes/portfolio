import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import notFoundImage from "../assets/others/404.svg";

function NotFound() {
  return (
    <div style={styles.container}>
      <Header />
      <div style="text-align: center;
        margin: 0;
        padding: 0;">
        <div style="font-size: 6rem;
          font-weight: 800;
          line-height: 1;
          color: #705748;
          margin-bottom: 16px;">404</div>
        <h1 style="font-size: 1.75rem;
            margin-bottom: 12px;">Page not found</h1>
        <p style ="font-size: 1rem;
            line-height: 1.6;
            margin-bottom: 28px;">Sorry, the page you are looking for doesn't exist or has been moved. Please check the URL or head back home.</p>
        <a href="/" style="display: inline-block;
          background-color: #705748;
          color: #ffffff;
          text-decoration: none;
          font-weight: 600;
          padding: 12px 24px;
          border-radius: 8px;
          transition: background-color 0.2s ease;">Back to Homepage</a>
        </div>
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
};

export default NotFound;
