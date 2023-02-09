import React, {useContext, useState, useEffect, createContext} from 'react';
import { useHistory } from 'reaact-router-dom';
import { auth } from '../firebase';


const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children })=> {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});
    const history = useHistory();

    useEffect(() =>{
            auth.onAuthStateChanged(() =>{

            })
    }, [user, history]);

}