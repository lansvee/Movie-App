// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import SingleMovie from './pages/SingleMovie';
import Movies from './pages/Movies';
import AddMovie from './pages/AddMovie';
import AdminDashboard from './pages/AdminDashboard';

// Components
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <BrowserRouter>
      {/* NavigationBar is always visible at the top */}
      <NavigationBar />

      {/* Define our routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<SingleMovie />} />
        <Route path="/add-movie" element={<AddMovie />} />

        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
