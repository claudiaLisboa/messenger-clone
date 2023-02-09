import React from 'react';
import '../App.css';
import Login from "./Login";
import { Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <div style={{ fontFamily :'Sono, sans-serif' }}>
        <Routes>
              <Route path="/" element={<Login/>}/>
        </ Routes>
    </div>
  );

}

export default App;
