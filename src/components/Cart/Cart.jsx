import React, { useState, useEffect } from 'react';
import './cart.css';

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
    });

    useEffect(() => {
        const storedCartItems = localStorage.getItem('cart');
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    useEffect(() => {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.price;
        });
        setTotalPrice(total);
    }, [cartItems]);

    const handleFormChange = (event) => {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            name: '',
            email: '',
            address: '',
        });
    };

    const handleRemoveFromCart = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };


    return (
        <div className="cart-container">
            <h1 className='cart-title'>Cart Summary</h1>
            {cartItems.length > 0 ? (
                <div>
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.title}</td>
                                    <td>{item.author}</td>
                                    <td>€ {item.price}</td>
                                    <td>
                                        <button className='remove-btn' onClick={() => handleRemoveFromCart(index)} > Remove </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="cart-total">
                        <p>Total Price: € {totalPrice}</p>
                        <button className='pay-btn'>Pay now </button>
                    </div>
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}

            <div className="form-container">
                <h3>Shipping Information</h3>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <p htmlFor="name">Name: <br />
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleFormChange}
                                required
                            />
                        </p>
                    </div>
                    <div>
                        <p htmlFor="email">Email:<br />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleFormChange}
                                required
                            />
                        </p>
                    </div>
                    <div>
                        <p htmlFor="address">Address:<br />
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleFormChange}
                                required
                            />
                        </p>
                    </div>
                    <button className='pay-btn' type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Cart;
