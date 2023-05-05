import React from 'react';
import './App.css';
import {
  Link, Outlet, Route, Routes,
} from 'react-router-dom';
import Category from './components/categories';
import Home from './components/home';

function App() {
  function Navbar() {
    return (
      <>
        <div className="nav-container">
          <nav className="navbar">
            <ul className="navlists">
              <li className="navlist"><Link to="/header" className="header">Bookstore CMS</Link></li>
              <li className="navlist"><Link className="link" to="/">BOOKS</Link></li>
              <li className="navlist"><Link className="link" to="/category">CATEGORIES</Link></li>
            </ul>
            <img src="https://img.icons8.com/external-anggara-outline-color-anggara-putra/32/000000/external-avatar-interface-anggara-outline-color-anggara-putra.png" alt="profile" className="profile" />
          </nav>
        </div>
        <Outlet />
      </>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/category" element={<Category />} />
      </Route>
    </Routes>
  );
}

export default App;
