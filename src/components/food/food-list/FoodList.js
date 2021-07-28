import { Component } from 'react';
import React from 'react';
import './FoodList.css'

import FoodBox from '../food-box/FoodBox';
import foodData from '../../../data/foods.json';
import FoodForm from '../food-form/FoodForm';

class FoodList extends Component {
  state = {
    foods: [],
    foodsSelected: [],
  };

  componentDidMount() {
    this.setState({ foods: foodData });
  }

  handleAddTodayFood(index) {
    this.setState(({ foods }) => ({
      foods: foods.filter()
    }))
  }

  handleCreateFood(food) {
    this.setState(({ foods }) => ({
      foods: [food, ...foods]       ///creo array nuevo con el contacto nuevo + todos los anteriores
    }))
  }

  render() {
    const { foods } = this.state

    return (
      <>
        <div className="row">
          <div className="col">
            <FoodForm onCreateFood={(food) => this.handleCreateFood(food)}/>
          </div>
        </div>
        
        <div className="box">
          {foods.map((food, index) => ( <FoodBox key={index} { ...food} onAddTodayFood={(index) => this.handleAddTodayFood(index)} />))}
        </div>
        <div className="column content">
          <h2 className="subtitle">Today's foods</h2>
          <ul>
            <li>2 Salad = 300 cal</li>
          </ul>
          <strong>Total: 700 cal</strong>
        </div>
      </>
    );
  }
}

export default FoodList;

//<li>{quantity} {name} = {calories} cal</li> 