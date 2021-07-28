import React from 'react';
import { Component } from 'react';


class FoodForm extends Component {
  state = {
    food: {
        name: '', 
        calories: '',
        image: '',
    },
  };

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState((prevState) => ({
        food: {                 //así piso el food entero
           ...prevState.food,   //quiero mantener las propiedades/atributos del estado paro añadir un cambio nevo
           [name]: value,       // quiero cambiar un atributo, pero quiero que me valga para todos los distintos name="" de los inputs del formulario
        },                      //utiliza la notación de  los corchetes para acceder a la propiedad del json que tenga la variable name
    }))
  }

  handleSubmit(event) {
    event.preventDefault();
    const { food } = this.state;
    
    this.props.onCreateFood(food); //es una prop a la que e vamos a dar un valor or defecto como función abajo en default props, quien define esta función es el padre
  }

  render() {
    const { food } = this.state;
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>

        <div className="input-group mb-1">
          <span className="input-group-text" id="basic-addon1">@</span>
          <input name="name" value={food.name} type="text" class="form-control" placeholder="Food Name" 
          onChange={(event) =>this.handleInputChange(event)}/> 
        </div>

        <div className="input-group mb-1">
          <span className="input-group-text" id="basic-addon1">@</span>
          <input name="calories" value={food.calories} type="number" class="form-control" placeholder="Number of calories" 
          onChange={(event) =>this.handleInputChange(event)}/> 
        </div>

        <div className="input-group mb-1">
          <span className="input-group-text" className="fa fa-picture-o fa-fw"></span>
          <input name="image" value={food.image} type="text" class="form-control" placeholder="Image url" 
          onChange={(event) =>this.handleInputChange(event)}/> 
        </div>

        <button className="btn btn-primary">Submit</button>

      </form>
    );
  }
}

FoodForm.defaultProps = {
    onCreateFood: () => {}
}

export default FoodForm;
