import React  from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import '../App.css';
import Login from "./Login";
import Chats from "./Chats";
import { AuthProvider} from "../contexts/AuthContext";

function App() {
  return (
    <div style={{ fontFamily :'Sono, sans-serif' }}>
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/chats" element={<Chats/>}/>
            </ Routes>
        </AuthProvider>
    </div>
  );

}
export default App;
