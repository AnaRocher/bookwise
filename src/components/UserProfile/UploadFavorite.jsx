import React, { useState, useEffect } from 'react';

function UploadFavorite() {
    const [bookTitle, setBookTitle] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [uploadedBooks, setUploadedBooks] = useState([]);

    const handleUpload = (e) => {
        e.preventDefault();

        const newBook = {
            title: bookTitle,
            author: bookAuthor,
        };

        setUploadedBooks((prevBooks) => [...prevBooks, newBook]);

        setBookTitle('');
        setBookAuthor('');
    };

    useEffect(() => {
        const storedBooks = localStorage.getItem('uploadedBooks');
        if (storedBooks) {
            setUploadedBooks(JSON.parse(storedBooks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('uploadedBooks', JSON.stringify(uploadedBooks));
    }, [uploadedBooks]);

    return (
        <div>
            <h2 className='title'>My favorite books:</h2>
            {uploadedBooks.length > 0 ? (
                <ul>
                    {uploadedBooks.map((book, index) => (
                        <li key={index}>
                            <h3>{book.title}</h3>
                            <p>Author: {book.author}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No books uploaded yet.</p>
            )}

            <h2 className='title-form'>Add your new favorite book here:</h2>
            <form className="upload-book-form" onSubmit={handleUpload}>
                <p>Title:</p>
                <input
                    type="text"
                    id="bookTitle"
                    value={bookTitle}
                    onChange={(e) => setBookTitle(e.target.value)}
                />
                <p>Author:</p>
                <input
                    type="text"
                    id="bookAuthor"
                    value={bookAuthor}
                    onChange={(e) => setBookAuthor(e.target.value)}
                />
                <p>
                    <button className='upload-book-button' type="submit">Add book</button>
                </p>
            </form>

        </div>
    );
}

export default UploadFavorite;

