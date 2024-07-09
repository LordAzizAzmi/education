import React from "react";
import "../../Components/Main/MainRill.css";
import "./Form.css";
import { Link, useLocation } from "react-router-dom";
import logouser from "../Assets/userdefault.png";
import Image from "react-bootstrap/Image";
import { Form } from 'react-bootstrap';

const Formpage = () => {
  const location = useLocation();
  const { selectedMeetings, selectedSubjects } = location.state || {};

  return (
    <div className="containerAnyMain">
      <div className="Sidemenu" style={{ height: "1500px" }}>
        <Image src={logouser} rounded />
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
        <div className="tekstitle" style={{ marginLeft: "10px" }}>
          Pilih Kursus
        </div>
      </div>
      <div className="containerForm">
        <Form style={{marginTop:"25px", marginLeft:"25px", marginRight:"25px"}}>
          <Form.Group className="mb-3" controlId="nama">
            <Form.Label>Nama</Form.Label>
            <Form.Control type="text" placeholder="Masukan Nama" style={{border:"1px solid black" , backgroundColor:"#8890944F"}}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="alamat">
            <Form.Label>Alamat</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Masukan Alamat" style={{border:"1px solid black" , backgroundColor:"#8890944F"}}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="nohp">
            <Form.Label>Nomer HP</Form.Label>
            <Form.Control type="text" placeholder="Masukan nohp" style={{border:"1px solid black" , backgroundColor:"#8890944F"}}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="ttl">
            <Form.Label>Tempat, Tanggal Lahir</Form.Label>
            <Form.Control type="text" placeholder="Masukan tempat tanggal lahir" style={{border:"1px solid black" , backgroundColor:"#8890944F"}}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="pendidikan">
            <Form.Label>Pendidikan</Form.Label>
            <Form.Control type="text" placeholder="Masukan pendidikan" style={{border:"1px solid black" , backgroundColor:"#8890944F"}}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="agama">
            <Form.Label>Agama</Form.Label>
            <Form.Control type="text" placeholder="Masukan Agama" style={{border:"1px solid black" , backgroundColor:"#8890944F"}}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="namaortu">
            <Form.Label>Nama orang Tua</Form.Label>
            <Form.Control type="text" placeholder="Masukan Nama Orang tua" style={{border:"1px solid black" , backgroundColor:"#8890944F"}}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="kerjaortu">
            <Form.Label>Pekerjaan orang Tua</Form.Label>
            <Form.Control type="text" placeholder="Masukan Pekerjaan Orang tua" style={{border:"1px solid black" , backgroundColor:"#8890944F"}}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="notes">
            <Form.Label>Notes</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Masukan Alamat" style={{border:"1px solid black" , backgroundColor:"#8890944F"}}/>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Formpage;
