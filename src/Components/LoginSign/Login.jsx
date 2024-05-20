import React, { useState } from 'react';
import axios from 'axios';
import './LoginSign.css';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        if (!loggedIn) {
            // Kirim permintaan GET ke server untuk mendapatkan data pengguna
            axios.get(`http://localhost:8000/api/users?phoneNumber=${phoneNumber}`)
                .then(function (response) {
                    // Data pengguna ditemukan
                    const user = response.data;
                    if (user && user.password === password) {
                        // Kata sandi cocok, set loggedIn ke true dan redirect ke Dashboard
                        setLoggedIn(true);
                        navigate('/Dashboard');
                    } else {
                        // Kata sandi tidak cocok
                        alert("Nomor HP atau kata sandi salah!");
                    }
                })
                .catch(function (error) {
                    // Terjadi kesalahan saat melakukan permintaan GET
                    console.error("Error fetching user data:", error);
                    alert("Terjadi kesalahan saat melakukan login. Silakan coba lagi.");
                });
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
                    <input type="text" placeholder="Nomer HP" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
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
