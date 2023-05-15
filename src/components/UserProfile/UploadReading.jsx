import React, { useState } from 'react';

function UploadReading() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [currentBooks, setCurrentBooks] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const newBook = {
            title: title,
            author: author,
        };

        setCurrentBooks((prevBooks) => [...prevBooks, newBook]);
        localStorage.setItem('currentBooks', JSON.stringify([...currentBooks, newBook]));

        setTitle('');
        setAuthor('');
    };
    return (
        <div className="upload-book">
            <h2 className='title-form'>Add your current reading book:</h2>
            <form className='form-reading' onSubmit={handleSubmit}>
                <div>
                    <p>Title:</p>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <p>Author:</p>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <p>
                    <button className='upload-book-button' type="submit">Add book</button>
                </p>
            </form>
        </div>
    );
}

export default UploadReading;
