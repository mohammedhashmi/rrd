import { useOutletContext } from "react-router-dom"

export function BookList () {
  const { hello } = useOutletContext()
  return (
    <>
      <div>
        <h1>My BookList {hello}</h1>
      </div>
    </>
  )
}