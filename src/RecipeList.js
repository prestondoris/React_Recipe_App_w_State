import React from 'react'
import PropTypes from 'prop-types';
import Recipe from './Recipe'
import './RecipeList.css'

const RecipeList = props => {
  const recipes = props.recipes.map((r) => (
    <Recipe onDelete={props.onDelete} key={r.id} {...r} />
  ));

  return (
    <div className="recipe-list">
      {recipes}
    </div>
  )
}

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired
}

export default RecipeList