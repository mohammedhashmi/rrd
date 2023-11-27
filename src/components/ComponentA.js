import React from 'react';
import ComponentB from "./ComponentB"
export const UserContext = React.createContext()
function ComponentA() {
  return(
    <div>
      <UserContext.Provider value="mohammed hashmi">
        <h1>Component A</h1>
        <ComponentB />
      </UserContext.Provider>
    </div>
  )
}
export default ComponentA