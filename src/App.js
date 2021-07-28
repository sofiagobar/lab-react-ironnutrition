import React from 'react';

import './App.css';
import FoodForm from './components/food/food-form/FoodForm';
import FoodList from './components/food/food-list/FoodList';



function App() {
  return (
    <div className="App">
      <div id="root">
        <div className="container">
          <h1 className="title">IronNutrition</h1>
          <div>
            <input type="text" className="input search-bar" name="search" placeholder="Search" value=""/>
          </div>
          <div className="columns">
            <div className="column">
              <FoodList/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
