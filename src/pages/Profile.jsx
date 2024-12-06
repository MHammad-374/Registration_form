import React, { useEffect } from 'react'

function Profile({ setNavbar, userName }) {
    useEffect(() => {
        setNavbar('')
    }, [])

    return (
        <div className='flex h-44 justify-center items-center'>
            <h1 className='font-bold'>Welcome! {userName}</h1>
        </div>
    )
}

export default Profile
