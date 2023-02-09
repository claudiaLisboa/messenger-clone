import React from 'react';
import '../App.css';
import Login from "./Login";
import { Routes, Route, Router } from "react-router-dom";
import { AuthProvider} from "../contexts/AuthContext";

function App() {
  return (
    <div style={{ fontFamily :'Sono, sans-serif' }}>
        <Routes>
            <AuthProvider>
              <Route path="/" element={<Login/>}/>
            </AuthProvider>
        </ Routes>
    </div>
  );

}

export default App;
