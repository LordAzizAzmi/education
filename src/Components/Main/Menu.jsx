import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Menu.css';
import LogoSD from '../Assets/logoSD.jpeg';
import LogoTK from '../Assets/logoTK.png';
import LogoSMP from '../Assets/logoSMP.jpeg';
import LogoSMA from '../Assets/logoSMA.jpeg';
import Image from "react-bootstrap/Image";
import logouser from "../Assets/userdefault.png";

const Menu = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('username');
    navigate('/login');
  };

  return (
    <div>
      <div className="containerMenu">
        <div className="HeaderMenu">
        <Image src={logouser} rounded />
          <div className="username">
            <p>{username ? `${username}` : 'Loading...'}</p>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/Dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/Menu">Jenjang</Link>
              </li>
              <li>
                <div className="HeaderLogout" onClick={handleLogout} style={{ cursor: 'pointer' }}>Log Out</div>
              </li>
            </ul>
          </nav>
          <div className="TitleMenu">
            <p>Jenjang Kelas</p>
          </div>
        </div>
        <div className="cardM-container">
        <Link to="/MenuTK">
          <div className="cardM" style={{ position: "relative", top: "106px", left: "-75px" }}>
            <div className="cardM-image"><img src={LogoTK} alt="LogoTK" /></div>
            <div className="category">TK</div>
          </div>
          </Link>
          <Link to="/MenuSD">
          <div className="cardM" style={{ position: "relative", top: "106px", left: "40px" }}>
            <div className="cardM-image"><img src={LogoSD} alt="LogoSD" /></div>
            <div className="category">SD</div>
          </div>
          </Link>
          <Link to="/MenuSMP">
          <div className="cardM" style={{ position: "relative", top: "106px", left: "150px" }}>
            <div className="cardM-image"><img src={LogoSMP} alt="LogoSMP" /></div>
            <div className="category">SMP</div>
          </div>
          </Link>
        </div>
        <div className="cardM-container">
          <Link to="/MenuSMA">
          <div className="cardM" style={{ position: "relative", top: "206px", left: "-80px" }}>
            <div className="cardM-image"><img src={LogoSMA} alt="LogoSMA" /></div>
            <div className="category">SMA</div>
          </div>
          </Link>
          <Link to="/MenuEnglish">
          <div className="cardM" style={{ position: "relative", top: "206px", left: "120px" }}>
            <div className="cardM-image"></div>
            <div className="category">Bahasa Inggris</div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
