import React, {useContext} from "react"
import ComponentC from "./ComponentC"
import {UserContext} from "../App"
function ComponentB() {
  const user = useContext(UserContext)
  return(
    <div>
      <p>component B is a child component of Component A and having 
        the use context, value is {user}</p>
      <ComponentC />
    </div>
  )
}
export default ComponentB