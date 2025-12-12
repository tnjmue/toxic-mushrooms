import { useState, useEffect, useContext } from 'react'
/* import { ThemeContext } from './context/theme.context' */
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Directory from './pages/directory'
import MushroomDetails from './pages/MushroomDetails'
import AddMushroom from './pages/AddMushroom'
import EditMushroom from './pages/EditMushroom'
import Error from './pages/Error'
import NavBar from './components/Navbar'
import Header from './components/Header'
import './App.css'
import { ThemeContext } from './context/theme.context'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function App() {

  const { theme, toggleTheme } = useContext(ThemeContext)
  const navigate = useNavigate();
  const API = import.meta.env.VITE_BASE_URL ?? "http://localhost:5005/mushroomsAPI";


  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/${id}`)
      /* setMushrooms(prev => prev.filter(mushroom => mushroom.id !== id)); */
      navigate("/directory");
      /* window.location.reload(false); */
    } catch(err) {
      console.error("Failed to delete mushroom:", err);
    }
  };

  const handleEdit =  (id) => {
    navigate(`/edit/${id}`);
  }

  return (
    <>
    <main className={theme}>
      <div className="navWidth">
    <NavBar />
    <Header />
    
    <Routes>
      <Route path="/" element={< Home  className="home"  />} />
      <Route path="/about" element={< About className="about" />} />
      <Route path="/directory" element={<Directory API={API} className="directory" />} />
      <Route path="/directory/:mushroomId" element={< MushroomDetails API={API} handleDelete={handleDelete} handleEdit={handleEdit} className="mshdtls" />} />
      <Route path="/add" element={< AddMushroom API={API} className="add" />} />
      <Route path="/edit/:mushroomId" element={< EditMushroom API={API} className="edit" />} />
      <Route path="*" element={< Error className="error" />} />
    </Routes>
    </div>
    </main>
    </>
  )
}

export default App
