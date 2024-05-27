import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Menu.css';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LockIcon from '@mui/icons-material/Lock';
import LogoSD from '../Assets/logoSD.jpeg'
import LogoTK from '../Assets/logoTK.png'
import LogoSMP from '../Assets/logoSMP.jpeg'
import LogoSMA from '../Assets/logoSMA.jpeg'

function Menu(){
    return (
        <div>
            <div className="containerMenu">
                <div className="HeaderMenu">
                    <div className="circleM-container">
                        <div className="circleM">
                            {/* Isi dengan gambar atau logo */}
                            <img src="" alt="" />
                            </div> 
                        </div>
                    <div className="NameUser"><p>Nama User</p></div>
                    <div className="TitleMenu"><p>Jenjang Kelas</p></div>
                </div>
                <div className="cardM-container">
                    <div class="cardM" style={{ position: "relative", top: "106px", left: "-75px" }}>
                        <div class="cardM-image" ><img src={LogoTK} alt="LogoTK" /></div>
                        <div class="category"> Illustration </div>
                    </div>
                    <div class="cardM" style={{ position: "relative", top: "106px", left: "40px" }}>
                        <div class="cardM-image" ><img src={LogoSD} alt="LogoSD" /></div>
                        <div class="category"> Illustration </div>
                    </div>
                    <div class="cardM" style={{ position: "relative", top: "106px", left: "150px" }}>
                        <div class="cardM-image" ><img src={LogoSMP} alt="LogoSMP" /></div>
                        <div class="category"> Illustration </div>
                    </div>
                </div>
                <div className="cardM-container">
                    <div class="cardM" style={{ position: "relative", top: "206px", left: "-80px" }}>
                        <div class="cardM-image" ><img src={LogoSMA} alt="LogoSMA" /></div>
                        <div class="category"> Illustration </div>
                    </div>
                    <div class="cardM" style={{ position: "relative", top: "206px", left: "120px" }}>
                        <div class="cardM-image" ></div>
                        <div class="category"> Illustration </div>
                    </div>
                </div>
                <Link to="/Dashboard">
                <button className="buttonM" style={{ position: "relative", top: "-320px", left: "-630px" }}>
                    <p>Dashboard</p>
                </button>
                </Link>
                <Link to="/Main">
                <button className="buttonM" style={{ position: "relative", top: "-300px", left: "-630px" }}>
                    <p>Jenjang Kelas</p>
                </button>
                </Link>
                <button className="buttonM" style={{ position: "relative", top: "-280px", left: "-630px" }}>
                    <p>Data Diri</p>
                </button>
                <Link to="/Login">
                <button className="buttonM" style={{ position: "relative", top: "-260px", left: "-630px" }}>
                    <p>Log Out</p>
                </button>
                </Link>
            </div>
        </div>
    )
}

export default Menu