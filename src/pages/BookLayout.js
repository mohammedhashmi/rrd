import { Link, Outlet, useSearchParams } from "react-router-dom"

export function BookLayout () {
  const [searchParams, setSearchParams] = useSearchParams({search: 3})
  const number = searchParams.get("search")
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
      <input type='number' value={number} onChange={e => setSearchParams({search: e.target.value})}/>
      <Outlet context={{hello: "world"}}/>
    </>
  )
}