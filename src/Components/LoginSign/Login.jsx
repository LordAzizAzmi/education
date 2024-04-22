import React, { useState } from 'react';
import axios from 'axios';
import './LoginSign.css';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';

const Login = () => {                                                       //buat fungsi
    const [phoneNumber, setPhoneNumber] = useState("");             //deklarasi variabel
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();                                  //deklarasi fungsi sebagai variabel

    const handleLogin = () => {                                                 //buat fungsi
        if (!loggedIn) {
            // Pindah ke halaman Dashboard hanya jika semua syarat benar
            if (phoneNumber === "081222" && password === "inipassword") {
                setLoggedIn(true);
                navigate('Dashboard');
            } else {
                alert("Nomor HP atau kata sandi salah!");
            }
        } else {
            alert("Anda sudah login!");
        }
    };

    return (
        <div className='container'>
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div> 
            <div className="inputs">                        {/* membuat form input */}
                <div className="input">
                    <PhoneAndroidIcon />
                    {/*Form Input noHp */}
                    <input type="text" placeholder="Nomer HP" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <div className="input">
                    <LockIcon />
                    {/*Form Input Password */}
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            <div className="submit-container">  
                <div className="submit" onClick={handleLogin}>Log In</div>      {/* Tombol Login dan melakukan aksi */}
            </div>
        </div>
    );
}

export default Login;
