import React, { useState } from 'react';
import recommendedBooks from '../../data/recommendedBooks';
import './bookList.css'

function BookList() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggleDescription = (index) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };

    console.log(recommendedBooks);

    return (
        <div className='book-container'>
            <h1 className='book-title'>Recommended Books</h1>
            <div className='book-grid'>
                {recommendedBooks.map((book, index) => (
                    <div className='book-item' key={index}>
                        <h3>{book.title}</h3>
                        <img className='book-cover' src={book.coverImg} alt={book.title} />
                        <p>Author: {book.author}</p>
                        <p>Category: {book.category}</p>
                        <p>Publisher: {book.publisher}</p>
                        <p>Total Pages: {book.pagesNumber}</p>
                        {expandedIndex === index ? (
                            <div>
                                <p>{book.description}</p>
                                <button className='toggle-button' onClick={() => handleToggleDescription(index)}>Close</button>
                            </div>
                        ) : (
                            <button className='toggle-button' onClick={() => handleToggleDescription(index)}>Read more</button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookList;
