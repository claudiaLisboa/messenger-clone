import React, {useRef, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';
import {useAuth} from "../contexts/AuthContext";
import axios from "axios";


export default  function Chats () {
        const didMountRef = useRef(false)
        const [loading, setLoading]  = useState(true)
        const navigate = useNavigate()
        const { user } = useAuth()

    async function handleLogout() {
            await auth.signOut()
            navigate('/')
    }
    // add user img
       async function getFile(url) {
             let response = await fetch(url);
             let data = await response.blob();
                 return new File([data],"userPhoto.jpg", {type: 'image/jpeg'});
            }

        useEffect(() =>{
            if (!didMountRef.current) {
                    didMountRef.current = true

                if (!user) {
                    navigate('/')
                    return

            }

        axios.get( 'https://api.chatengine.io/users/me/',
            { headers: {
                    "project-id": process.env.REACT_APP_CHAT_ENGINE_ID,
                    "user-name": user.email,
                    "user-secret": user.uid
                }}
        )
            .then(() => setLoading(false))

            .catch((error) => {
                    let formdata = new FormData()
                        formdata.append('email', user.email)
                        formdata.append('username',  user.email)
                        formdata.append('secret', user.uid)

            getFile(user.photoURL)
                    .then(avatar => {
                        formdata.append('avatar', avatar, avatar.name)

                        axios.post( 'https://api.chatengine.io/users/',
                                formdata,
                                { headers:  { "private-key": process.env.REACT_APP_CHAT_ENGINE_KEY}}

                         )
                        .then(() => setLoading(false))
                        .catch(error => console.log('error', error.response))
                    })
                })
         }
    }, [user,navigate])


    if(!user || loading ) return


    return(
        <div className="chats-page">
            <div className="nav-bar">
                <div className='logo-tab'>
                      MessengerClone
                </div>

                <div onClick={handleLogout} className="logout-tab">
                     Logout
                </div>
            </div>

            <ChatEngine
                height='calc(100vh - 66px)'
                projectID= {process.env.REACT_APP_CHAT_ENGINE_ID}
                userName={user.email}
                userSecret={user.uid}
            />
        </div>

    )
}
