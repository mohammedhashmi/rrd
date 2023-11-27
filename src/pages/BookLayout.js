import { Link, Outlet } from "react-router-dom"

export function BookLayout () {
  return(
    <>
      <ul>
        <li>
          <Link to="/books/new">New</Link>
        </li>
        <li>
          <Link to="/books/1">First Book</Link>
        </li>
        <li>
          <Link to="/books/2">Second Book</Link>
        </li>
      </ul>
      <Outlet />
    </>
  )
}