import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Recipe from './Recipe'
import './RecipeList.css'

class RecipeList extends Component {
  static defaultProps = {
    recipes: [
      {
        title: 'Spaghetti',
        ingredients: ['1 jar of pasta sauce','8 cups of water','1 box of spaghetti'],
        instructions: 'Open jar of sauce and bring to simmer. Bring water to a boil and add spaghetti, then cook based on time on box. Drain the water then add the sauce to the pasta.',
        img: 'spaghetti.jpg'
      },
      {
        title: "Milkshake",
        instructions: "Combine ice cream and milk.  Blend until creamy",
        ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
        img: "milkshake.jpg"
      },
      {
        title: "Avocado Toast",
        instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
        ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
        img: "avocado_toast.jpg"
      }
    ]
  }

  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
  }
  render() {
    const recipes = this.props.recipes.map((r, ind) => (
      <Recipe key={ind} {...r} />
    ));
    return (
      <div className="recipe-list">
        {recipes}
      </div>
    )
  }
}

export default RecipeList