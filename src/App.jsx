import React from 'react';
import Nav from './components/Nav';
import Title from './components/Title';
import Menu from './components/Menu';
import Footer from './components/Footer';
import './App.css';

function App() {
 
  return ( 
    <>
      <div className="App">
        <Nav />
        <Title />
        <Menu />
        <Footer />
      </div>

    </>
    
  )
}

export default App