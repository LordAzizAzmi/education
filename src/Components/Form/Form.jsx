import React, { useState } from "react";
import "../../Components/Main/MainRill.css";
import "./Form.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logouser from "../Assets/userdefault.png";
import Image from "react-bootstrap/Image";
import { Form, Button } from 'react-bootstrap';

const Formpage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedMeetings, selectedSubjects } = location.state || {};
  const [formData, setFormData] = useState({
    nama: '',
    alamat: '',
    nohp: '',
    tglLahir: '',
    pendidikan: '',
    agama: '',
    orangtua: '',
    pekerjaanOrangTua: '',
    notes: ''
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataToSubmit = {
      ...formData,
      selectedMeetings,
      selectedSubjects
    };

    try {
      const response = await fetch('http://localhost:8000/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSubmit)
      });
      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        navigate('/Dashboard');
      } else {
        alert(result.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting the form.');
    }
  };

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
        <Form onSubmit={handleSubmit} style={{marginTop:"25px", marginLeft:"25px", marginRight:"25px"}}>
          <Form.Group className="mb-3" controlId="nama">
            <Form.Label>Nama</Form.Label>
            <Form.Control type="text" placeholder="Masukan Nama" style={{border:"1px solid black" , backgroundColor:"#8890944F"}} onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="alamat">
            <Form.Label>Alamat</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Masukan Alamat" style={{border:"1px solid black" , backgroundColor:"#8890944F"}} onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="nohp">
            <Form.Label>Nomer HP</Form.Label>
            <Form.Control type="text" placeholder="Masukan nohp" style={{border:"1px solid black" , backgroundColor:"#8890944F"}} onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="tglLahir">
            <Form.Label>Tempat, Tanggal Lahir</Form.Label>
            <Form.Control type="text" placeholder="Masukan tempat tanggal lahir" style={{border:"1px solid black" , backgroundColor:"#8890944F"}} onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="pendidikan">
            <Form.Label>Pendidikan</Form.Label>
            <Form.Control type="text" placeholder="Masukan pendidikan" style={{border:"1px solid black" , backgroundColor:"#8890944F"}} onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="agama">
            <Form.Label>Agama</Form.Label>
            <Form.Control type="text" placeholder="Masukan Agama" style={{border:"1px solid black" , backgroundColor:"#8890944F"}} onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="orangtua">
            <Form.Label>Nama orang Tua</Form.Label>
            <Form.Control type="text" placeholder="Masukan Nama Orang tua" style={{border:"1px solid black" , backgroundColor:"#8890944F"}} onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="pekerjaanOrangTua">
            <Form.Label>Pekerjaan orang Tua</Form.Label>
            <Form.Control type="text" placeholder="Masukan Pekerjaan Orang tua" style={{border:"1px solid black" , backgroundColor:"#8890944F"}} onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="notes">
            <Form.Label>Notes</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Masukan Alamat" style={{border:"1px solid black" , backgroundColor:"#8890944F"}} onChange={handleChange}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Formpage;
