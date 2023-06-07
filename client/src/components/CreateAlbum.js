import React, {useState} from 'react';
import axios from 'axios'
import AlbumForm from './AlbumForm';
import { useNavigate, useParams } from 'react-router-dom';

const CreateAlbum = (props) => {
    const {album, setAlbum, errors, setErrors} = props
    const navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newAlbum', album, {withCredentials:true})
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
                // setErrors(err.response.data.errors)
            })
    }

    return (
        <>
            <AlbumForm 
            submitHandler={submitHandler}
            album={album}
            setAlbum={setAlbum}
            errors={errors}
            setErrors={setErrors}
            />
        </>
)}

export default CreateAlbum;