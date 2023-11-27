import React from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import {BookList} from './pages/BookList'
import { Book } from './pages/Book';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">BookList</Link>
          </li>
          <li>
            <Link to="/books/1">First Book</Link>
          </li>
          <li>
            <Link to="/books/2">Second Book</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<ComponentA />} />
        <Route path="/books" element={<BookList />} />
        <Route path='/books/:id' element={<Book/>}></Route>
      </Routes>
    </>
  );
}

export default App;
