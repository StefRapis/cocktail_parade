// funzione per filtro categoria cocktails
export const filteredCocktails = (array, key, value) => {
  if (value === "") {
    return array;
  } else {
    return array.filter((item) => item[key] === value);
  }
};
