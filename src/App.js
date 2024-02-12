// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user/:username" element={<UserDetails />} />
        <Route path="/" element={<UserList />} />
      </Routes>
    </Router>
  );
}

export default App;
