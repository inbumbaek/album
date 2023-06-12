import axios from 'axios';
import React, {useState, useEffect} from 'react';

const Profile = (props) => {
    useEffect(() => {
        axios.get('http://localhost:8000/api/myAlbums', {withCredentials:true})
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <div>
            <h2>Profile</h2>
        </div>
)}

export default Profile;