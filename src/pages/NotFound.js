import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export function NotFound () {
  // we are using this useeffect as an example
  // to show when you submit form after a second 
  //you will be redirected to home
  const navigate = useNavigate()
  
  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 1000)
  }, [])

  return (
    <div>
      <h1>Not Found</h1>
    </div>
  )
}