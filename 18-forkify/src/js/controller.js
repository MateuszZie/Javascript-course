import * as model from './model.js';
import RecipeView from './view/recipeView.js';
import SearchView from './view/searchView.js';
import ResultView from './view/resultView.js';
import PaginationView from './view/paginationView.js';
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

    ResultView.update(model.getSearchResaultPage());

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
    PaginationView.render(model.state.search);
  } catch {
    ResultView.renderError();
  }
};

const controlPagination = async function (pageNumber) {
  ResultView.render(model.getSearchResaultPage(pageNumber));
  PaginationView.render(model.state.search);
};

const controlServings = async function (newServings) {
  model.updateServings(newServings);

  RecipeView.update(model.state.recipe);
};

const controlBookmarks = async function () {
  if (!model.state.recipe.kookmarked) model.addBookmarks(model.state.recipe);
  else model.deleteBookmarks(model.state.recipe);
  RecipeView.update(model.state.recipe);
};

const init = function () {
  RecipeView.addHandlerRender(controlRecipe);
  RecipeView.addHandlerServings(controlServings);
  RecipeView.addHandlerBookmarks(controlBookmarks);
  SearchView.addHandlerSearch(controlSerachRecipe);
  PaginationView.addHandlerPagination(controlPagination);
};

init();
