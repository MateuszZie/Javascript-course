import { async } from 'regenerator-runtime';
import { AJAX } from './helpers';
import { API_URL, RES_MAX_PAGE, API_KEY } from './config';

export const state = {
  recipe: {},
  search: {
    query: '',
    recipes: [],
    page: 1,
    resultPerPage: RES_MAX_PAGE,
  },
  bookmarks: [],
};

export const loadRecipe = async function (id) {
  const bookmarkRecipe = state.bookmarks.find(recipe => recipe.id === id);
  if (bookmarkRecipe) {
    state.recipe = bookmarkRecipe;
    return;
  }
  let { recipe } = await AJAX(`${API_URL}${id}?key=${API_KEY}`);
  setRecipe(recipe);
};

export const loadSearchRecipe = async function (query) {
  state.search.query = query;
  state.search.page = 1;
  let { recipes } = await AJAX(`${API_URL}?search=${query}&key=${API_KEY}`);

  state.search.recipes = recipes.map(recipe => {
    return {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      image: recipe.image_url,
      ...(recipe.key && { key: recipe.key }),
    };
  });
};

export const getSearchResaultPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultPerPage;
  const end = page * state.search.resultPerPage;
  return state.search.recipes.slice(start, end);
};

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  });
  state.recipe.servings = newServings;
};

export const addBookmarks = function (recipe) {
  recipe.bookmarked = true;
  state.bookmarks.push(recipe);
  persistBookmarks();
};

export const deleteBookmarks = function (recipe) {
  recipe.bookmarked = false;
  const index = state.bookmarks.indexOf(recipe);
  state.bookmarks.splice(index, 1);
  persistBookmarks();
};

const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

const init = function () {
  const bookmarks = localStorage.getItem('bookmarks');
  if (bookmarks) state.bookmarks = JSON.parse(bookmarks);
};

export const uploadRecipe = async function (newRecipe) {
  const ingredients = [];
  for (let [key, value] of Object.entries(newRecipe)) {
    const ingredientArr = value.replaceAll(' ', '').split(',');
    if (key.startsWith('ingredient') && ingredientArr.length === 3) {
      const ingr = {
        quantity: ingredientArr[0] ? +ingredientArr[0] : null,
        unit: ingredientArr[1],
        description: ingredientArr[2],
      };
      ingredients.push(ingr);
    }
  }
  const recipe = {
    title: newRecipe.title,
    publisher: newRecipe.publisher,
    source_url: newRecipe.sourceUrl,
    image_url: newRecipe.image,
    servings: newRecipe.servings,
    cooking_time: newRecipe.cookingTime,
    bookmarked: true,
    ingredients,
  };

  const uploadedRecipe = await AJAX(`${API_URL}?key=${API_KEY}`, recipe);
  setRecipe(uploadedRecipe.recipe);
  addBookmarks(state.recipe);
};

const setRecipe = function (recipe) {
  state.recipe = {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    ...(recipe.key && { key: recipe.key }),
  };
};

init();
