import React from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import {BookList} from './pages/BookList'
import { Book } from './pages/Book';
import { Link, Route, Routes } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import { BookLayout } from './pages/BookLayout';
import { NewBook } from './pages/NewBook';

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
        <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=':id' element={<Book/>}/>
          <Route path='new' element={<NewBook/>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
