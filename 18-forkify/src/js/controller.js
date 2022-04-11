import * as model from './model.js';
import RecipeView from './view/recipeView.js';
import SearchView from './view/searchView.js';
import ResultView from './view/resultView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime/runtime';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    RecipeView.renderSpinner();

    await model.loadRecipe(id);

    RecipeView.render(model.state.recipe);
  } catch {
    RecipeView.renderError();
  }
};

const controlSerachRecipe = async function () {
  try {
    ResultView.renderSpinner();
    const query = SearchView.getQuery();
    if (!query) return;
    await model.loadSearchRecipe(query);
    ResultView.render(model.getSearchResaultPage());
  } catch {
    ResultView.renderError();
  }
};

const init = function () {
  RecipeView.addHandlerRender(controlRecipe);
  SearchView.addHandlerSearch(controlSerachRecipe);
};

init();
