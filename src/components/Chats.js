import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';

const Chats = () => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        await auth.signOut();

        navigate('/');
    }

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