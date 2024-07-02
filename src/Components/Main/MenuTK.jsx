import React, { useState } from "react";
import "./MainRill.css";
import { Link } from "react-router-dom";
import logoTK from "../Assets/logoTK.png";
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
        <Image src={logoTK} rounded />
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
        <Image src={logoTK} rounded />
        <p>Taman Kanak-Kanak</p>
      </div>
      <div className="containerpesan">
        <p style={{marginTop:"100px"}}>Detail Harga</p> <br />
        <div>
          <input
            type="radio"
            id="1x"
            name="meetings"
            value="1"
            onChange={handleMeetingChange}
          />
          <label htmlFor="1x" className="teks">3 x Seminggu - Rp. 250.000 /bln</label>
        </div>
        <h3>Pilih Pelajaran:</h3>
          <div className="teks">{["Calistung (Baca, Tulis, Hitung"].map(
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
