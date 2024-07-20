import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./MainRill.css";
import LogoSD from "../Assets/logoSD.jpeg";
import logouser from "../Assets/userdefault.png";
import Button from 'react-bootstrap/Button';
import Image from "react-bootstrap/Image";

const Menusd = () => {
  const [selectedMeeting, setSelectedMeeting] = useState(null);
  const [nama_kursus, setnama_kursus] = useState([]);
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

  useEffect(() => {
    const checkInactivity = () => {
      const lastActive = parseInt(localStorage.getItem('lastActive'), 10);
      const now = Date.now();
      const maxInactivityTime = 30 * 60 * 1000; // 30 minutes

      if (now - lastActive > maxInactivityTime) {
        handleLogout();
      }
    };

    const intervalId = setInterval(checkInactivity, 60 * 1000); // Check every 1 minute

    return () => clearInterval(intervalId);
  }, []);

  const handleMeetingChange = (event) => {
    const [meetings, price] = event.target.value.split(',');
    setSelectedMeeting({ meetings: parseInt(meetings), price: parseFloat(price.replace(/[^0-9.-]+/g,"")) });
    if (nama_kursus.length > parseInt(meetings)) {
      setnama_kursus(nama_kursus.slice(0, parseInt(meetings)));
    }
  };

  const handleSubjectChange = (event) => {
    if (!selectedMeeting) {
      alert("Pilih Pertemuan dulu");
      return;
    }

    const subject = event.target.value;
    if (nama_kursus.includes(subject)) {
      setnama_kursus(nama_kursus.filter((s) => s !== subject));
    } else if (nama_kursus.length < selectedMeeting.meetings) {
      setnama_kursus([...nama_kursus, subject]);
    }
  };

  const handleSubmit = () => {
    navigate('/form', {
      state: {
        paket: 'SD',
        selectedMeeting,
        nama_kursus
      }
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    localStorage.removeItem('lastActive');
    navigate('/login');
  };

  return (
    <div className="containerAnyMain">
      <div className="Sidemenu">
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
                <Link to="/Riwayat">Riwayat</Link>
            </li>
            <li>
              <div className="SideLogout" onClick={handleLogout} style={{ cursor: 'pointer' }}>Log Out</div>
            </li>
          </ul>
        </nav>
      </div>
      <div className="containertitle">
        <div className="tekstitle">"AMA" Education Centre</div>
      </div>
      <div className="course-selection">
        <div className="tekstitle" style={{marginLeft:"10px"}}>Pilih Kursus</div>
      </div>
      <div className="containerjnj">
        <Image src={LogoSD} rounded />
        <p>Sekolah Dasar</p>
      </div>
      <div className="containerpesan">
        <p>Detail Harga</p> <br />
        <p>Kelas 1 - 2</p> <br />
        <div>
          <input
            type="radio"
            id="3x"
            name="meetings"
            value="3, 250000"
            onChange={handleMeetingChange}
          />
          <label htmlFor="3x" className="teks">3 x Seminggu - Rp. 250.000 /bln</label>
        </div>
        <br/><p>Kelas 3 - 6</p> <br />
        <div>
          <input
            type="radio"
            id="2x"
            name="meetings"
            value="2, 200000"
            onChange={handleMeetingChange}
          />
          <label htmlFor="2x" className="teks">2 x Seminggu - Rp. 200.000 /bln</label>
        </div>
        <div>
          <input
            type="radio"
            id="3x1"
            name="meetings"
            value="3, 270000"
            onChange={handleMeetingChange}
          />
          <label htmlFor="3x1" className="teks">3 x Seminggu - Rp. 270.000 /bln</label>
        </div>
        <h3>Pilih Pelajaran:</h3>
        <div className="teks">
          {["Matematika", "Ipa", "IPS", "Bahasa Indonesia"].map(
            (subject) => (
              <div key={subject}>
                <input
                  type="checkbox"
                  id={subject}
                  value={subject}
                  checked={nama_kursus.includes(subject)}
                  onChange={handleSubjectChange}
                  disabled={
                    nama_kursus.length >= selectedMeeting?.meetings &&
                    !nama_kursus.includes(subject)
                  }
                />
                <label htmlFor={subject}>{subject}</label>
              </div>
            )
          )}
        </div>
      </div>
      <Button className="buttonMenu" onClick={handleSubmit} disabled={!selectedMeeting}>Oke</Button>
    </div>
  );
};

export default Menusd;
