import './header.css'
import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <div className="header">
            <div className='header-container'>
                <p className='logo'>BookWise</p>
                <nav>
                    <ul>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/books">Recommended Books</Link></li>
                        <li><Link to="/profile">My profile</Link></li>
                        <li><Link to="/book-shop">Book Shop</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/">Logout</Link></li>

                    </ul>
                </nav>
            </div>
        </div>
    );
}
