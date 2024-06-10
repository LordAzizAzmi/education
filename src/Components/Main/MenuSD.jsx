import React from 'react';
import './Mainany.css';

const Menusd = () => {
  return (
    <div>
    <div className="containertitle">  
        <div className="alltitletext">"AMA" EDUCATION CENTRE</div>
    </div>
    <div className="containerbackbtn">
        <button className="back-button">←</button>
    </div>
    <div className="containerLogo">
        <div className="school-info">
        <img src="https://i.imgur.com/Q4e6T0I.png" alt="School Logo" className="logo" />
        <div className="school-name">Sekolah Dasar</div>
        </div>
    </div>
    <div className="container">
        <div className="subjects">
          <p>Matematika</p>
          <p>IPA</p>
          <p>Bahasa Indonesia</p>
          <p>IPS</p>
        </div>
      <div className="price-details">
        <div className="title">Detail Harga</div>
        <div className="class-details">
          <div className="class">
            <input type="checkbox" />
            <span className="class-name">Kelas 1-2</span>
            <span className="price">Rp. 250.000/bln</span>
          </div>
          <div className="class">
            <input type="checkbox" />
            <span className="class-name">Kelas 3-6</span>
            <span className="price">Rp. 200.000/bln</span>
          </div>
          <div className="class">
            <input type="checkbox" />
            <span className="class-name">Kelas 3-6</span>
            <span className="price">Rp. 270.000/bln</span>
          </div>
        </div>
      </div>
      <button className="ok-button">Oke</button>
    </div>
    </div>
  );
};

export default Menusd;
