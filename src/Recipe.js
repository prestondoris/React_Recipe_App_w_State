import React, {Component} from 'react'
import './Recipe.css';

class Recipe extends Component {
  render() {
    const {title, img, instructions} = this.props;
    const ingredients = this.props.ingredients.map((ing, ind) => (
      <li key={ind}>{ing}</li> 
    ));
    return (
      //Can only return a single element so the recipe title div and the ul have to be wrapped in a single DIV
      <div className="recipe-card">
        <div className="recipe-card-img">
          <img src={img} alt={title} />
        </div>
        <div className="recipe-card-content">
          <h3 className="recipe-title">Recipe {title}</h3>
          {/* ingredients is an array of li elements and the code below will render each li seperately*/}
          <ul>
            {ingredients}
          </ul>
          <h4>Instructions: </h4>
          <p>{instructions}</p>
        </div>
      </div>
    )
  }
}

export default Recipe;