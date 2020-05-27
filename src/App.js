import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import Toggle from './components/Toggle'
function App() {
  return (
    <div className="App">
   <h1>cursor position</h1>
   {/* <ClassComponent /> */}
   {/* <FunctionalComponent /> */}
   <Toggle/>
    </div>
  );
}

export default App;
