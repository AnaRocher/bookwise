import React, { useState, useEffect } from 'react';
import booksForSale from '../../data/booksForSale';
import './bookshop.css';

function BookShop() {
    const [cart, setCart] = useState([]);
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    const handleAddToCart = (book) => {
        const updatedCart = [...cart, book];
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setIsAddedToCart(true);

        setTimeout(() => {
            setIsAddedToCart(false);
        }, 2000);
    };

    return (
        <div className='shop-container overlay'>
            <h2 className='book-shop-title'>Book Shop</h2>
            {isAddedToCart && (
                <div className='popup-message'>Successfully added to your cart</div>
            )}
            <div className='book-grid'>
                {booksForSale.map((book, index) => (
                    <div className='book-item' key={index}>
                        <h3>{book.title}</h3>
                        <p>Author: {book.author}</p>
                        <p>Price: € {book.price}</p>
                        <button className='add-to-cart' onClick={() => handleAddToCart(book)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BookShop;
