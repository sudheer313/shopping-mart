import React from "react";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";

const Home = () => {
  return (
    <div className="container">
      <h1
        className="headline"
        style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}
      >
        {" "}
        Welcome to Shopping Mart
      </h1>
      <p
        className="tagline"
        style={{
          fontSize: "1.2rem",
          lineHeight: "1.5rem",
          textAlign: "center",
        }}
      >
        Welcome to our online store! We offer a wide range of products at great
        prices. Browse our selection and start shopping today.
      </p>
      <div className="image-container">
        <img src={img1} alt="Product image 1" />
        <img src={img2} alt="Product image 2" />
      </div>
    </div>
  );
};

export default Home;
