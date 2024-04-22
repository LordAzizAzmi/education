import React from 'react';                                                 //library
import { useState } from 'react';                                       //library
import './LoginSign.css';
import PersonIcon from '@mui/icons-material/Person';                    //memanggil icon material dari library
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';

const LoginSign = () => {                                               //deklarasi fungsi loginsign

    const [action, setAction] = useState("Sign Up");                    //deklarasi variabel 
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleLogin = () => {
        if (phoneNumber === "081222" && password === "inipassword") {
            // Jika nomor HP dan password cocok, pindahkan ke halaman home
            // Anda dapat mengganti ini dengan logika navigasi yang sesuai di sini
            alert("Login berhasil!");
            // Contoh untuk pindah ke halaman home: window.location.href = "/home";
        } else {
            // Jika nomor HP atau password tidak cocok, berikan pesan kesalahan
            alert("Nomor HP atau kata sandi salah!");
        }
    };

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div> 
                <div className="underline"></div> 
            </div>
            <div className="inputs">                                        
                {action==="Login"?<div></div>:<div className="input">               {/* Membuat form input username */}
                    <PersonIcon />
                    <input type="text" placeholder="Username" />
                </div>}
                <div className="input">                                             {/* Membuat form input nohp */}
                    <PhoneAndroidIcon />
                    <input type="nohp"  placeholder="Nomer HP"/>
                </div>
                <div className="input">                                             {/* Membuat form input password */}
                    <LockIcon />
                    <input type="password" placeholder="Password"/>
                </div>
            </div>
            {action==="Sign Up"?<div></div>:<div className="forget-password">Lupa Password <span>Klik Disini</span></div>}      {/* tombol untuk lupa password */}
            
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>     {/* tombol untuk Sign  */}
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Log In</div>         {/* tombol untuk Login */}
            </div>
        </div>
    );
}

export default LoginSign;
