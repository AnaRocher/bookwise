import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import BookShop from './components/BookShop/BookShop';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import BookList from './components/BookList/BookList';
import UserProfile from './components/UserProfile/UserProfile';
import Cart from './components/Cart/Cart';

function App() {

  return (
    <Router>
      <div className="container">
        <div className='content'>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/books" element={<BookList />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/book-shop" element={<BookShop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

