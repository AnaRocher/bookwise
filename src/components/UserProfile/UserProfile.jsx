import React, { useState, useEffect } from 'react';
import CurrentReading from './CurrentReading';
import BookTracker from './BookTracker';
import './userProfile.css'
import UploadFavorite from './UploadFavorite';
import UploadReading from './UploadReading';

function UserProfile() {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const userEmail = localStorage.getItem('loggedInUser');
        const storedUser = localStorage.getItem(userEmail);
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUserName(parsedUser.name);
        }
    }, []);

    return (
        <div className='user-container'>
            <h1 className='user-title'>{userName}'s profile</h1>
            <div className='user-grid'>
                <div>
                    <CurrentReading />
                    <BookTracker />
                    <UploadReading />
                </div>
                <div>
                    <UploadFavorite />
                </div>
            </div>
        </div>
    );
}

export default UserProfile;