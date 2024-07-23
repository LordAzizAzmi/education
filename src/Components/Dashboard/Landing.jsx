import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import Logo from "../Assets/logoAMA.jpg";
import Poster from "../Assets/poster.jpg";
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


function Landingpage() {
  useEffect(() => {
    // Hapus sesi local storage
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
    localStorage.removeItem("lastActive");
  }, []);

  return (
    <div>
      <div className="container1">
        <br /> <br />
        <div className="circle-container">
          <div className="circle">
            <img src={Logo} alt="Logo" />
          </div>
        </div>
        <br />
        <div className="title">
          " AMA " <br /> EDUCATION CENTRE
        </div>
        <br />
        <br />
        <br />
        <Col xs={6} md={4}>
          <Image src={Poster} thumbnail />
        </Col>
        <br />
        <br />
        <Link to="/Login">
          <button className="buttonLGSG" style={{ top: "90%", left: "50%" }}>
            Masuk
          </button>
        </Link>
        <br />
        <br />
        <Link to="/Register">
          <button className="buttonLGSG" style={{ top: "90%", left: "50%" }}>
            Daftar
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Landingpage;
