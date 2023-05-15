import React, { useState, useEffect } from 'react';

function BookTracker() {
    const [totalPages, setTotalPages] = useState(null);
    const [currentPage, setCurrentPage] = useState(null);
    const [isBookDeleted, setIsBookDeleted] = useState(false);

    useEffect(() => {
        const savedTotalPages = localStorage.getItem('totalPages');
        const savedCurrentPage = localStorage.getItem('currentPage');

        if (savedTotalPages) {
            setTotalPages(parseInt(savedTotalPages, 10));
        }

        if (savedCurrentPage) {
            setCurrentPage(parseInt(savedCurrentPage, 10));
        }
    }, []);

    useEffect(() => {
        if (totalPages !== null) {
            localStorage.setItem('totalPages', totalPages.toString());
        }
    }, [totalPages]);

    useEffect(() => {
        if (currentPage !== null) {
            localStorage.setItem('currentPage', currentPage.toString());
        }
    }, [currentPage]);

    const handleTotalPagesChange = (event) => {
        setTotalPages(parseInt(event.target.value, 10));
    };

    const handleCurrentPageChange = (event) => {
        setCurrentPage(parseInt(event.target.value, 10));
    };

    const handleDeleteBook = () => {
        localStorage.removeItem('currentBooks');
        setTotalPages(null);
        setCurrentPage(null);
        setIsBookDeleted(true);
    };

    const percentageCompleted = totalPages && currentPage ? (currentPage / totalPages) * 100 : 0;

    if (!localStorage.getItem('currentBooks')) {
        return null;
    }

    return (
        <div className="tracker">
            {isBookDeleted ? (
                <p>Book deleted</p>
            ) : (
                <>
                    <label htmlFor="totalPages">Total Pages:</label>
                    <input
                        className="pages-tracker"
                        type="number"
                        id="totalPages"
                        value={totalPages || ''}
                        onChange={handleTotalPagesChange}
                    />
                    <br />
                    <label htmlFor="currentPage">Current Page:</label>
                    <input
                        className="pages-tracker"
                        type="number"
                        id="currentPage"
                        value={currentPage || ''}
                        onChange={handleCurrentPageChange}
                    />

                    <p>Percentage Completed: {Math.floor(percentageCompleted)}%</p>
                    {localStorage.getItem('currentBooks') && (
                        <button className="remove-btn" onClick={handleDeleteBook}>
                            Delete Book
                        </button>
                    )}
                </>
            )}
        </div>
    );
}

export default BookTracker;

