import './App.css';
import { useState } from 'react';
import Display from './components/Display';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Nav from './components/Nav';
import CreateAlbum from './components/CreateAlbum';
import OneAlbum from './components/OneAlbum';
import EditAlbum from './components/EditAlbum';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';

function App() {
  const [album, setAlbum] = useState({
    albumName: '',
    artist: '',
    releaseYear: 1920,
    genre: 'Rock',
    explicit: false
  })
  const [errors, setErrors] = useState({})
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Display/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/createAlbum/form' element={<CreateAlbum
            album={album}
            setAlbum={setAlbum}
            errors={errors}
            setErrors={setErrors}/>}
          />
          <Route path='/oneAlbum/:id' element={<OneAlbum/>}/>
          <Route path='/editAlbum/:id' element={<EditAlbum
            album={album}
            setAlbum={setAlbum}
            errors={errors}
            setErrors={setErrors}/>}
          />
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
