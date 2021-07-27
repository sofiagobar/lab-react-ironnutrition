import { Component } from 'react';
import React from 'react';
import './FoodList.css'

import FoodBox from '../foodbox/FoodBox';
import foodData from '../../../data/foods.json';

class FoodList extends Component {
  state = {
    foods: [],
  };

  componentDidMount() {
    this.setState({ foods: foodData });
  }

  render() {
    const { foods } = this.state

    return (
      <>
        <div className="box">
          {foods.map((food, index) => ( <FoodBox key={index} { ...food} />))}
          
        </div>
        <div className="column content">
          <h2 className="subtitle">Today's foods</h2>
          <ul>
            <li>1 Pizza = 400 cal</li>
            <li>2 Salad = 300 cal</li>
          </ul>
          <strong>Total: 700 cal</strong>
        </div>
      </>
    );
  }
}

export default FoodList;
