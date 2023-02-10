import React, {useContext, useState, useEffect, createContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';


const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children })=> {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() =>{
            auth.onAuthStateChanged((user) =>{
                setUser(user);
                setLoading(false);
                //only if have the user then navigate push the chat
                if(user) navigate('/chats');
            })
    }, [user, navigate]);

    const value = { user };

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )

}