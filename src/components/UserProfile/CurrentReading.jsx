import React, { useState, useEffect } from 'react';

function CurrentReading() {
    const [currentBooks, setCurrentBooks] = useState([]);

    useEffect(() => {
        const storedBooks = localStorage.getItem('currentBooks');
        if (storedBooks) {
            setCurrentBooks(JSON.parse(storedBooks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('currentBooks', JSON.stringify(currentBooks));
    }, [currentBooks]);


    return (
        <div className="current-reading">
            <h2 className="title">Currently Reading:</h2>
            {currentBooks.length > 0 ? (
                currentBooks.map((book, index) => (
                    <div key={index}>
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                    </div>
                ))
            ) : (
                <p>No current reading books.</p>
            )}

        </div>
    );
}

export default CurrentReading;
