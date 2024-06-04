import React, { useState } from 'react';
import axios from 'axios';
import './LoginSign.css';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [phone, setphone] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!loggedIn) {
            try {
                const response = await axios.post('http://localhost:8000/api/login', {
                    phone: phone, // Perbarui nama variabel agar sesuai dengan backend
                    password: password
                });

                if (response.data.status === 'success') {
                    setLoggedIn(true);
                    localStorage.setItem('accessToken', response.data.accessToken);
                    navigate('/Dashboard');
                } else {
                    alert(response.data.message); // Tangani pesan kegagalan login
                }
            } catch (error) {
                console.error("Error logging in:", error);
                alert("Terjadi kesalahan saat melakukan login. Silakan coba lagi.");
            }
        } else {
            alert("Anda sudah login!");
        }
    };

    return (
        <div className="container">
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <PhoneAndroidIcon />
                    <input type="text" placeholder="Nomer HP" value={phone} onChange={(e) => setphone(e.target.value)} />
                </div>
                <div className="input">
                    <LockIcon />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            <div className="submit-container">
                <div className="submit" onClick={handleLogin}>Log In</div>
            </div>
        </div>
    );
}

export default Login;
