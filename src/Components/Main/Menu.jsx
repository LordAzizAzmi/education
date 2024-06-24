import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Menu.css';

import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LockIcon from '@mui/icons-material/Lock';
import LogoSD from '../Assets/logoSD.jpeg';
import LogoTK from '../Assets/logoTK.png';
import LogoSMP from '../Assets/logoSMP.jpeg';
import LogoSMA from '../Assets/logoSMA.jpeg';
import API_BASE_URL from '../../../src/apiConfig';

const Menu = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        navigate('/login'); // Redirect to login if no token found
        return;
      }

      try {
        const response = await axios.get(`${API_BASE_URL}/login`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        console.log('User Data Response:', response);

        if (response.data.status === 'success') {
          setUsername(response.data.user.name);
        } else {
          alert(response.data.message);
          navigate('/login');
        }
      } catch (error) {
        if (error.response) {
          console.error("Server responded with error:", error.response.data);
          alert(`Login failed: ${error.response.data.message || 'Unknown error'}`);
        } else if (error.request) {
          console.error("No response received:", error.request);
          alert("No response from server. Please check your network.");
        } else {
          console.error("Error setting up request:", error.message);
          alert("Terjadi kesalahan saat mengambil data pengguna. Silakan coba lagi.");
        }
        navigate('/login');
      }
    };

    fetchUserData();
  }, [navigate]);

  return (
    <div>
      <div className="containerMenu">
        <div className="HeaderMenu">
              <img src="" alt="" />
          <div className="username">
            <p>{username ? `Nama User: ${username}` : 'Loading...'}</p>
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
              <Link to="/Login">Log Out</Link>
            </li>
          </ul>
        </nav>
          <div className="TitleMenu">
            <p>Jenjang Kelas</p>
          </div>
        </div>
        <div className="cardM-container">
          <div className="cardM" style={{ position: "relative", top: "106px", left: "-75px" }}>
            <div className="cardM-image"><img src={LogoTK} alt="LogoTK" /></div>
            <div className="category">TK</div>
          </div>
          <div className="cardM" style={{ position: "relative", top: "106px", left: "40px" }}>
            <div className="cardM-image"><img src={LogoSD} alt="LogoSD" /></div>
            <div className="category">SD</div>
          </div>
          <div className="cardM" style={{ position: "relative", top: "106px", left: "150px" }}>
            <div className="cardM-image"><img src={LogoSMP} alt="LogoSMP" /></div>
            <div className="category">SMP</div>
          </div>
        </div>
        <div className="cardM-container">
          <div className="cardM" style={{ position: "relative", top: "206px", left: "-80px" }}>
            <div className="cardM-image"><img src={LogoSMA} alt="LogoSMA" /></div>
            <div className="category">SMA</div>
          </div>
          <div className="cardM" style={{ position: "relative", top: "206px", left: "120px" }}>
            <div className="cardM-image"></div>
            <div className="category">Bahasa Inggris</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
