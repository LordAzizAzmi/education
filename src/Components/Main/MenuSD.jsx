import React, { useState } from "react";
import "./MainRill.css";
import { Link } from "react-router-dom";
import LogoSD from "../Assets/logoSD.jpeg";
import Button from 'react-bootstrap/Button';
import Image from "react-bootstrap/Image";


const Menusd = () => {
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
        <Image src={LogoSD} rounded />
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
            value="3"
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
            value="2"
            onChange={handleMeetingChange}
          />
          <label htmlFor="2x" className="teks">2 x Seminggu - Rp. 200.000 /bln</label>
        </div>
        <div>
          <input
            type="radio"
            id="3x1"
            name="meetings"
            value="3"
            onChange={handleMeetingChange}
          />
          <label htmlFor="3x1" className="teks">3 x Seminggu - Rp. 270.000 /bln</label>
        </div>
        <h3>Pilih Pelajaran:</h3>
          <div className="teks">{["Matematika", "IPA", "IPS", "Bahasa Indonesia"].map(
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

export default Menusd;
