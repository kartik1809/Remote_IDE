import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/DashBoard';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import PrivateRoute from './components/PrivateRoute';
import Projects from './pages/Projects';
import WebProject from './pages/WebPen/WebProject';
// import './components/DashComp/DashNav.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/webproject" element={<WebProject/>} />
      </Routes>
    </Router>
  );
}

export default App;