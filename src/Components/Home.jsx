import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home(){
    const navigate = useNavigate()

    const handleclick = () => {
        navigate('/about');
    }
    return(
        <>
        <p>This Home Page</p>
        <button onClick={handleclick}>To About Page</button>
        </>
    )
}

export default Home