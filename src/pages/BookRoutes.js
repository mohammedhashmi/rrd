import { Routes,Route } from "react-router-dom"
import { BookLayout } from "./BookLayout"
import { BookList } from "./BookList"
import { Book } from "./Book"
import { NewBook } from "./NewBook"

export function BookRoutes() {
  return (
    <>
      <BookLayout />
      <Routes>
        <Route index element={<BookList />} />
        <Route path=':id' element={<Book/>}/>
        <Route path='new' element={<NewBook/>}/>
      </Routes>
    </>
  )
}