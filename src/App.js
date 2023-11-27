import React from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import { BookRoutes } from './pages/BookRoutes';

function App() {
  const location = useLocation();
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/" state="Hello">Home</NavLink>
          </li>
          <li>
            <NavLink to="/books">Books</NavLink>
          </li>
        </ul>
      </nav>
      {location.state}
      <Routes>
        <Route path="/" element={<ComponentA />} />
        <Route path="/books/*" element={<BookRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
