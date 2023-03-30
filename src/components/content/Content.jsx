import styles from "./index.module.scss";
import { useState, useEffect } from "react";
import { GET } from "../../utils/fetch";
import { filteredCocktails } from "../../utils/func";

import Card from "../card";

// const obj = {
//   idDrink: "17187",
//   strDrink: "Derby",
//   strDrinkThumb:
//     "https://www.thecocktaildb.com/images/media/drink/52weey1606772672.jpg",
//   strCategory: "Ordinary Drink",
//   strAlcoholic: "Alcoholic",
//   strInstructions:
//     "Pour all ingredients into a mixing glass with ice. Stir. Strain into a cocktail glass. Garnish with a sprig of fresh mint in the drink.",
//   strIngredient1: "gin",
//   strIngredient2: "Peach Bitters",
//   strIngredient3: "Mint",
// };

// devo fare filtro su array della fetch
const Content = ({
  data,
  cocktailList,
  setCocktailList,
  setDrinkModal,
  drinkByLetter,
}) => {
  useEffect(() => {
    GET(`${drinkByLetter}`).then(({ drinks }) => setCocktailList(() => drinks));
  }, [drinkByLetter]);

  return (
    <div className={styles.Content}>
      {filteredCocktails(cocktailList, "strCategory", data).map((cocktail) => (
        <Card
          data={cocktail}
          key={cocktail.idDrink}
          setDrinkModal={setDrinkModal}
        />
      ))}
    </div>
  );
};

export default Content;
