import { Link, Outlet } from "react-router-dom"

export function BookLayout () {
  return(
    <>
      <ul>
        <li>
          <Link to="new">New</Link>
        </li>
        <li>
          <Link to="1">First Book</Link>
        </li>
        <li>
          <Link to="2">Second Book</Link>
        </li>
      </ul>
      <Outlet context={{hello: 'world'}}/>
    </>
  )
}