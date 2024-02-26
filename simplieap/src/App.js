// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './parts/Signup/Signup'; 
import './App.css'; 
import DashboardComponent from './parts/Dashboradcomponent/Dashoboardpage';
import Dashboard from './parts/Dashborad/Dashboard';
import Login from './parts/Login/Login';




function App() {
  return (
    <Router>
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboardcomponent" element={<DashboardComponent />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
  );
}

export default App;
