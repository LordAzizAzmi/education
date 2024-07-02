import React, { useState } from "react";
import "./MainRill.css";
import { Link } from "react-router-dom";
import logoSMP from "../Assets/logoSMP.jpeg";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";


const Menusmp = () => {
  const [selectedMeetings, setSelectedMeetings] = useState(0);
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const handleMeetingChange = (event) => {
    const meetings = parseInt(event.target.value);
    setSelectedMeetings(meetings);
    // Reset selected subjects if the number of allowed subjects is decreased
    if (selectedSubjects.length > meetings) {
      setSelectedSubjects(selectedSubjects.slice(0, meetings));
    }
  };

  const handleSubjectChange = (event) => {
    const subject = event.target.value;
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(selectedSubjects.filter((s) => s !== subject));
    } else if (selectedSubjects.length < selectedMeetings) {
      setSelectedSubjects([...selectedSubjects, subject]);
    }
  };

  return (
    <div className="containerAnyMain">
      <div className="Sidemenu">
        <Image src={logoSMP} rounded />
        <div className="username">username</div>
        <nav>
          <ul>
          <li>
              <Link to="/Dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/Menu">Jenjang</Link>
            </li>
            <li>
              <Link to="/Login">Log Out</Link>
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
        <Image src={logoSMP} rounded />
        <p>Sekolah Menengah Pertama</p>
      </div>
      <div className="containerpesan">
        <p>Detail Harga</p> <br />
        <div>
          <input
            type="radio"
            id="1x"
            name="meetings"
            value="1"
            onChange={handleMeetingChange}
          />
          <label htmlFor="1x" className="teks">1 x Pertemuan - Rp. 110.000 /bln</label>
        </div>
        <div>
          <input
            type="radio"
            id="2x"
            name="meetings"
            value="2"
            onChange={handleMeetingChange}
          />
          <label htmlFor="2x" className="teks">2 x Pertemuan - Rp. 220.000 /bln</label>
        </div>
        <div>
          <input
            type="radio"
            id="3x"
            name="meetings"
            value="3"
            onChange={handleMeetingChange}
          />
          <label htmlFor="3x" className="teks">3 x Pertemuan - Rp. 330.000 /bln</label>
        </div>
        <h3>Pilih Pelajaran:</h3>
          <div className="teks">{["Matematika", "Ipa Terpadu", "Bahasa Inggris"].map(
            (subject) => (
              <div key={subject}>
                <input
                  type="checkbox"
                  id={subject}
                  value={subject}
                  checked={selectedSubjects.includes(subject)}
                  onChange={handleSubjectChange}
                  disabled={
                    selectedSubjects.length >= selectedMeetings &&
                    !selectedSubjects.includes(subject)
                  }
                />
              <label htmlFor={subject}>{subject}</label>
            </div>
          )
        )}
        </div>
      </div>
      <Button className="buttonMenu">Oke</Button>{' '}
    </div>
  );
};

export default Menusmp;
