import { async } from 'regenerator-runtime';
import { getJSON } from './helpers';
import { API_URL, RES_MAX_PAGE } from './config';

export const state = {
  recipe: {},
  search: {
    query: '',
    recipes: [],
    page: 1,
    resultPerPage: RES_MAX_PAGE,
  },
};

export const loadRecipe = async function (id) {
  let { recipe } = await getJSON(`${API_URL}${id}`);
  state.recipe = {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
  };
};

export const loadSearchRecipe = async function (query) {
  state.search.query = query;
  let { recipes } = await getJSON(`${API_URL}?search=${query}`);

  state.search.recipes = recipes.map(recipe => {
    return {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      image: recipe.image_url,
    };
  });
};

export const getSearchResaultPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultPerPage;
  const end = page * state.search.resultPerPage;
  return state.search.recipes.slice(start, end);
};
