import React from 'react';
import './App.css';
import ComponentA from './components/ComponentA';

export const UserContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value="mohammed hashmi">
        <ComponentA />
      </UserContext.Provider>
    </div>
  );
}

export default App;
