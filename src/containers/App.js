import React from 'react';
import Main from '../components/Main';
import About from '../components/About';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Main />
      <About className="tc"/>
    </React.Fragment>
  );
}

export default App;
