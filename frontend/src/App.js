import React, {Fragment} from 'react';
import './App.css';

//Components
import InputPlant from './Components/InputPlant';
import ListPlants from './Components/ListPlants';

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputPlant /> 
        <ListPlants />
      </div>
    </Fragment>
  );
}

export default App;
