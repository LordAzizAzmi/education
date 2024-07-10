import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Button from 'react-bootstrap/Button';
import logoSMA from "../Assets/logoSMA.jpeg";
import logouser from "../Assets/userdefault.png";
import "./MainRill.css";

const Menusma = () => {
  const [selectedMeeting, setSelectedMeeting] = useState(null);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
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

  const handleMeetingChange = (event) => {
    const [meetings, price] = event.target.value.split(',');
    setSelectedMeeting({ meetings: parseInt(meetings), price: price.trim() });
    if (selectedSubjects.length > parseInt(meetings)) {
      setSelectedSubjects(selectedSubjects.slice(0, parseInt(meetings)));
    }
  };

  const handleSubjectChange = (event) => {
    const subject = event.target.value;
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(selectedSubjects.filter((s) => s !== subject));
    } else if (selectedSubjects.length < selectedMeeting.meetings) {
      setSelectedSubjects([...selectedSubjects, subject]);
    }
  };

  const handleSubmit = () => {
    navigate('/form', {
      state: {
        paket: 'SMA',
        selectedMeeting,
        selectedSubjects
      }
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
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
        <Image src={logoSMA} rounded />
        <p>Sekolah Menengah Atas</p>
      </div>
      <div className="containerpesan">
        <p>Detail Harga</p> <br />
        <div>
          <input
            type="radio"
            id="1x"
            name="meetings"
            value="1, Rp. 110.000 /bln"
            onChange={handleMeetingChange}
          />
          <label htmlFor="1x" className="teks">
            1 x Pertemuan - Rp. 110.000 /bln
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="2x"
            name="meetings"
            value="2, Rp. 220.000 /bln"
            onChange={handleMeetingChange}
          />
          <label htmlFor="2x" className="teks">
            2 x Pertemuan - Rp. 220.000 /bln
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="3x"
            name="meetings"
            value="3, Rp. 330.000 /bln"
            onChange={handleMeetingChange}
          />
          <label htmlFor="3x" className="teks">
            3 x Pertemuan - Rp. 330.000 /bln
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="4x"
            name="meetings"
            value="4, Rp. 480.000 /bln"
            onChange={handleMeetingChange}
          />
          <label htmlFor="4x" className="teks">
            4 x Pertemuan - Rp. 480.000 /bln
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="5x"
            name="meetings"
            value="5, Rp. 600.000 /bln"
            onChange={handleMeetingChange}
          />
          <label htmlFor="5x" className="teks">
            5 x Pertemuan - Rp. 600.000 /bln
          </label>
        </div>
        <h3>Pilih Pelajaran:</h3>
        <div className="teks">
          {["Matematika", "Fisika", "Kimia", "Biologi", "Bahasa Inggris"].map(
            (subject) => (
              <div key={subject}>
                <input
                  type="checkbox"
                  id={subject}
                  value={subject}
                  checked={selectedSubjects.includes(subject)}
                  onChange={handleSubjectChange}
                  disabled={
                    selectedSubjects.length >= selectedMeeting?.meetings &&
                    !selectedSubjects.includes(subject)
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

export default Menusma;
