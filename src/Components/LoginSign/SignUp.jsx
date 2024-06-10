// src/components/SignUp.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginSign.css';
import PersonIcon from '@mui/icons-material/Person';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LockIcon from '@mui/icons-material/Lock';
import API_BASE_URL from '../../../src/apiConfig';

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const navigate = useNavigate();

  const handlePhoneChange = (event) => {
    const newPhone = event.target.value.replace(/\D/g, '');
    if (newPhone.length > 12) {
      setPhoneError("Nomor HP tidak boleh lebih dari 12 digit");
      return;
    }
    setPhone(newPhone);
    setPhoneError("");
  };

  const handleSignUp = async () => {
    if (username !== "" && phone !== "" && password !== "") {
      try {
        const response = await axios.post(`${API_BASE_URL}/register`, {
          username,
          phone,
          password
        });
        console.log('SignUp Response:', response);
        if (response.data.status === 'success') {
          navigate('/login');
        } else {
          alert(`Sign up failed: ${response.data.message}`);
        }
      } catch (error) {
        if (error.response) {
          console.error("Server responded with error:", error.response.data);
          alert(`Sign up failed: ${error.response.data.message || 'Unknown error'}`);
        } else if (error.request) {
          console.error("No response received:", error.request);
          alert("No response from server. Please check your network.");
        } else {
          console.error("Error setting up request:", error.message);
          alert("Terjadi kesalahan saat mendaftar. Silakan coba lagi.");
        }
      }
    } else {
      alert("Silakan lengkapi formulir terlebih dahulu.");
    }
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <PersonIcon />
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="input">
          <PhoneAndroidIcon />
          <input type="text" placeholder="Nomer HP" value={phone} onChange={handlePhoneChange} />
          {phoneError && <div className="error-message">{phoneError}</div>}
        </div>
        <div className="input">
          <LockIcon />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      <div className="submit-container">
        <div className="submit" onClick={handleSignUp}>Sign Up</div>
      </div>
      <center>
        <p>Jika sudah punya akun <span className="forget-password" onClick={() => navigate('/login')}>Klik sini</span></p>
      </center>
    </div>
  );
}

export default SignUp;
