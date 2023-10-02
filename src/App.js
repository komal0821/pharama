import React from 'react';
import './App.css';
import HomePage from './Component/HomePage'
import Header from './Component/Header';
import Product from './Component/Product'
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <main>
        {<Header/>}
        {<HomePage/>}
        {<Product/>}
      </main>
      <footer>
        {<Footer/>}
      </footer>
    </div>
  );
}

export default App;
