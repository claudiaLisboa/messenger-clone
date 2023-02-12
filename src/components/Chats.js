import React, {useRef, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';
import {useAuth} from "../contexts/AuthContext";
import axios from "axios";


const Chats = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [loading, setLoading]  = useState(true);
    const handleLogout = async () => {
        await auth.signOut();

        navigate('/');
    }

    useEffect(() =>{
        if(!user){
            navigate('/');

            return;
        }

        axios.get('https://api.chatengine.io/users/me', {
            headers:{
                "project-id": "2b492a02-0660-454d-887b-4827497de028",
                "user-id": user.email,
                "user-secret": user.uid,
            }
        }).then(() =>{
                setLoading(false);
        })

    }, [user,navigate]);
    return(
        <div className="chats-page">
            <div className="nav-bar">
                MessengerClone
            </div>
            <div onClick={handleLogout} className="logout-tab">
                Logout
            </div>
            <ChatEngine
                height="calc(100vh - 66px"
                projectId= "2b492a02-0660-454d-887b-4827497de028"
                userName="."
                userSecret="."

            />
        </div>
    );

}
export default Chats;