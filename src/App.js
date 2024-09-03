import React from 'react';
import './App.css';
import ProductList from './component/ProductList';

const App = () => {
  return (
    <div className="App">
      {/* <h1 style={{color:'red',fontSize:26,fontWeight:'bold'}}>My Product Feed</h1> */}
      <ProductList />
    </div>
  );
};

export default App;
