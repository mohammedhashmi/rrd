import React from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import { Link, Route, Routes } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import { BookRoutes } from './pages/BookRoutes';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<ComponentA />} />
        <Route path="/books/*" element={<BookRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
