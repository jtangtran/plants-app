import React from 'react';
import './App.css';

//Components
import InputPlant from './Components/InputPlant';
import ListPlants from './Components/ListPlants';
import Footer from './Components/Footer';

function App() {
  return (
      <div className="container">
        <InputPlant /> 
        <ListPlants />
        <Footer />
      </div>
  );
}

export default App;
