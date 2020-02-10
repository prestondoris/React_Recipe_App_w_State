import React, { Component } from 'react';
import RecipeList from './RecipeList';
import Navbar from './Navbar';
import NewRecipe from './NewRecipe';
import './RecipeApp.css';

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          id: 0,
          title: 'Spaghetti',
          ingredients: ['1 jar of pasta sauce', '8 cups of water', '1 box of spaghetti'],
          instructions: 'Open jar of sauce and bring to simmer. Bring water to a boil and add spaghetti, then cook based on time on box. Drain the water then add the sauce to the pasta.',
          img: 'spaghetti.jpg'
        },
        {
          id: 1,
          title: "Milkshake",
          instructions: "Combine ice cream and milk.  Blend until creamy",
          ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
          img: "milkshake.jpg"
        },
        {
          id: 2,
          title: "Avocado Toast",
          instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
          ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
          img: "avocado_toast.jpg"
        }
      ],
      nextRecipeID: 3,
      showForm: false
    }

    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeID};
      return {
        nextRecipeID: prevState.nextRecipeID + 1,
        recipes: [...this.state.recipes, newRecipe],
        showForm: false
      }
    });
  }

  onDelete(id) {
    const recipes = this.state.recipes.filter(r => r.id !== id);
    this.setState({recipes})
  }

  render() {
    const {showForm} = this.state;
    return (
      <div className="App">
        <Navbar onNewRecipe={() => this.setState({showForm: true})}/>
        { showForm ? 
          <NewRecipe 
            onSave={this.handleSave} 
            onClose={() => this.setState({showForm: false})}
          /> : 
          null }
        <RecipeList onDelete={this.onDelete} recipes={this.state.recipes}  />
      </div>
    );
  }
}

export default RecipeApp;
