import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import AlbumForm from './AlbumForm';

const EditAlbum = (props) => {
    const {album, setAlbum, errors, setErrors} = props
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneAlbum/${id}`)
            .then((res) => {
                setAlbum(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    },[])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/updateAlbum/${id}`, album)
            .then((res) => {
                console.log(res);
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors)
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

export default EditAlbum;