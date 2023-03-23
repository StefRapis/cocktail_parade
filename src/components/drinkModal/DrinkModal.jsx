import styles from "./index.module.scss";

// const obj = {
//   idDrink: "11006",
//   strDrink: "Daiquiri",
//   strDrinkAlternate: null,
//   strTags: "IBA,Classic,Beach",
//   strVideo: null,
//   strCategory: "Ordinary Drink",
//   strIBA: null,
//   strAlcoholic: "Alcoholic",
//   strGlass: "Cocktail glass",
//   strInstructions:
//     "Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled cocktail glass.",
//   strInstructionsES: null,
//   strInstructionsDE:
//     "Alle Zutaten in den Shaker mit Eiswürfel geben. Gut schütteln. In einem gekühlten Cocktailglas abseihen.",
//   strInstructionsFR: null,
//   strInstructionsIT:
//     "Versare tutti gli ingredienti nello shaker con cubetti di ghiaccio.Filtrare in una coppetta da cocktail ghiacciata. Agitare bene",
//   "strInstructionsZH-HANS": null,
//   "strInstructionsZH-HANT": null,
//   strDrinkThumb:
//     "https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg",
//   strIngredient1: "Light rum",
//   strIngredient2: "Lime",
//   strIngredient3: "Powdered sugar",
//   strIngredient4: null,

//   strMeasure1: "1 1/2 oz ",
//   strMeasure2: "Juice of 1/2 ",
//   strMeasure3: "1 tsp ",

//   strImageSource:
//     "https://commons.wikimedia.org/wiki/File:Classic_Daiquiri_in_Cocktail_Glass.jpg",
//   strImageAttribution: "Will Shenton",
//   strCreativeCommonsConfirmed: "Yes",
//   dateModified: "2015-08-18 15:06:37",
// };

const DrinkModal = ({ setDrinkModal, payload }) => {
  const closeModal = () => {
    // tutto il valore precedente piú un oggetto nuovo
    setDrinkModal((prev) => ({
      ...prev,
      isVisible: false,
    }));
  };

  return (
    <div className={styles.DrinkModal}>
      <div className={styles.image}>
        <img src={payload.strDrinkThumb} alt="cocktail" />
      </div>

      <div className={styles.allInfo}>
        <div className={styles.info}>
          <button onClick={closeModal}>X</button>
          <h2 className={styles.title}>{payload.strDrink}</h2>
          <h4 className={styles.category}>{payload.strCategory}</h4>
        </div>

        <div className={styles.ingredients}>
          <h5 className={styles.tagIng}>Ingredients:</h5>
          <p className={styles.eachIng}>{payload.strIngredient1}</p>
          <p className={styles.eachIng}>{payload.strIngredient2}</p>
          <p className={styles.eachIng}>{payload.strIngredient3}</p>
        </div>

        <div className={styles.preparation}>
          <h5 className={styles.tagPrep}>Instructions:</h5>
          <p className={styles.instructions}>{payload.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default DrinkModal;
