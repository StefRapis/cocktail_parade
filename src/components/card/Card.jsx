import styles from "./index.module.scss";

const Card = ({ data, setDrinkModal }) => {
  const openDrinkModal = () => {
    setDrinkModal((prev) => ({
      ...prev,
      payload: data,
      isVisible: true,
    }));
  };

  return (
    <div className={styles.Card} onClick={openDrinkModal}>
      <img src={data.strDrinkThumb} alt="" />

      <div className={styles.titles}>
        <h3 className={styles.title}>{data.strDrink}</h3>
        <p className={styles.category}>{data.strCategory}</p>
        <p className={styles.alcohol}>{data.strAlcoholic}</p>
      </div>

      <div className={styles.instructions}>
        {/* <p>{data.strInstructions}</p> */}
        {/* <span>{data.strIngredient1}</span>
        <span>{data.strIngredient2}</span>
        <span>{data.strIngredient3}</span> */}
      </div>
    </div>
  );
};

export default Card;
