import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Nav = (props) => {
    const navigate = useNavigate()
    const logout = () => {
        axios.post('http://localhost:8000/api/logout', {}, {withCredentials:true})
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div className='d-flex justify-content-evenly align-items=center border'>
            <h1>Records Dot Com</h1>
            <div className='w-50 d-flex justify-content-evenly align-items-center'>
                <Link to={'/createAlbum/form'}>Post an album</Link>
                <br />
                <Link to={'/'}>Home</Link>
                <Link to={'/profile'}>Profile</Link>
                <Link to={'/login'}>Login</Link>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
)}

export default Nav;