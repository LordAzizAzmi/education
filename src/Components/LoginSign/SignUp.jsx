import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';                  
import './LoginSign.css';   
import PersonIcon from '@mui/icons-material/Person';                
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';    
import LockIcon from '@mui/icons-material/Lock';                    

const SignUp = () => {                                          
    const [username, setUsername] = useState("");                   
    const [phoneNumber, setPhoneNumber] = useState("");      
    const [password, setPassword] = useState("");                
    const navigate = useNavigate();                              

    const handleNavigateToLogin = () => {                               
        if (username !== "" && phoneNumber !== "" && password !== "") {    
            // Kirim data ke server menggunakan Axios
            axios.post('http://localhost:your_port/your_endpoint', {
                username: username,
                phoneNumber: phoneNumber,
                password: password
            })
            .then(function (response) {
                console.log(response);
                // Redirect ke halaman login setelah berhasil mendaftar
                navigate('/login');
            })
            .catch(function (error) {
                console.log(error);
                // Tampilkan pesan kesalahan jika terjadi masalah saat mengirim data
                alert("Gagal mendaftar. Silakan coba lagi.");
            });
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
                    <input type="text" placeholder="Nomer HP" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <div className="input">
                    <LockIcon />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            <div className="submit-container">
                <div className="submit" onClick={handleNavigateToLogin}>Sign Up</div>       
            </div>
            <p>Jika sudah punya akun <span className="forget-password" onClick={() => navigate('/login')}>Klik sini</span></p>
        </div>
    );
}

export default SignUp;
