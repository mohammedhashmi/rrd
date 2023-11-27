import { useOutletContext } from "react-router-dom"

export function NewBook () {
  const { hello } = useOutletContext()
  return (
    <div>
      <h1>New Book {hello}</h1>
    </div>
  )
}