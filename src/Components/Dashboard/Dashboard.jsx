import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';
import Logo from '../Assets/logoAMA.jpg';
import Poster from "../Assets/poster.jpg";
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


function Dashboard() {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
  
    useEffect(() => {
      const storedUsername = localStorage.getItem('username');
      if (storedUsername) {
        setUsername(storedUsername);
      } else {
        navigate('/login'); // Jika username tidak ada di localStorage, arahkan kembali ke halaman login
      }
    }, [navigate]);

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
        <div className="title">" AMA " <br /> EDUCATION CENTRE
        </div>
        <br />
        <br />
        <br />
        <Col xs={6} md={4}>
          <Image src={Poster} thumbnail />
        </Col>
        <br />
        <br />
        <Link to="/Menu">
          <button className="buttonLGSG" style={{ top: "90%", left: "50%" }}>
            Ke Menu
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
