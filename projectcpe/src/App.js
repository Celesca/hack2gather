import React from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
      </div>
  );
};

export default App;