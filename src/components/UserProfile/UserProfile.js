import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
const UserProfile = () => {
    const [profile, setProfile] = useState({})
    let location = useLocation()
    useEffect(() => {
        setProfile(location.state.user)
    }, [location.state.user]);
    return (
        <div>
            <img className='pro-img' src={profile?.picture?.thumbnail} />
            <div className='name-container'>
                <div className='name' ><b> {profile?.name?.title} </b></div>
                <div className='name'><b> {profile?.name?.first} </b></div>
                <div className='name'><b> {profile?.name?.last} </b></div>
            </div>
            <div className='age'>{profile?.email}</div>
        </div>
    )
}

export default UserProfile