import recipeView from './views/recipeView.js';
import * as model from './model.js';

import 'core-js/actual';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// https://forkify-api.herokuapp.com/v2

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.renderSpinner();

    await model.loadRecipe(id);

    recipeView.render(model.state.recipe)

  } catch (err) {
    alert(err)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const events = ['hashchange', 'load'];
  events.forEach(ev => {
    window.addEventListener(ev, controlRecipes);
  });
});