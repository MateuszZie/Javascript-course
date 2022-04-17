import * as model from './model.js';
import RecipeView from './view/recipeView.js';
import SearchView from './view/searchView.js';
import ResultView from './view/resultView.js';
import PaginationView from './view/paginationView.js';
import BookmarksView from './view/bookmarksView.js';
import AddRecipeView from './view/addRecipeView.js';
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
    BookmarksView.update(model.state.bookmarks);
    await model.loadRecipe(id);

    RecipeView.render(model.state.recipe);
  } catch {
    RecipeView.renderError();
  }
};

const controlSerachRecipe = async function () {
  try {
    const query = SearchView.getQuery();
    if (!query) return;
    ResultView.renderSpinner();
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
  if (!model.state.recipe.bookmarked) model.addBookmarks(model.state.recipe);
  else model.deleteBookmarks(model.state.recipe);
  RecipeView.update(model.state.recipe);
  BookmarksView.render(model.state.bookmarks);
};

const controlInit = async function () {
  BookmarksView.render(model.state.bookmarks);
};

const cotrolAddRecipe = async function (newRecipe) {
  try {
    await model.uploadRecipe(newRecipe);
    RecipeView.renderSpinner();
    BookmarksView.render(model.state.bookmarks);
    RecipeView.render(model.state.recipe);
  } catch {
    RecipeView._errorMeassage();
  }
};

const init = function () {
  BookmarksView.addHandlerBookmarks(controlInit);
  AddRecipeView.addHandlerUpload(cotrolAddRecipe);
  RecipeView.addHandlerRender(controlRecipe);
  RecipeView.addHandlerServings(controlServings);
  RecipeView.addHandlerBookmarks(controlBookmarks);
  SearchView.addHandlerSearch(controlSerachRecipe);
  PaginationView.addHandlerPagination(controlPagination);
};

init();
