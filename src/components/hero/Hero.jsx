import styles from "./index.module.scss";

const Hero = ({ setCocktailCategory }) => {
  return (
    <div className={styles.Hero}>
      {/* <img
        className={styles.img}
        src="https://images.unsplash.com/photo-1592858321831-dabeabc2dd65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        alt="cocktails"
      /> */}
      <h1 className={styles.title}>What's your flavour?</h1>
      <div className={styles.categories}>
        <ul>
          <li onClick={() => setCocktailCategory("")}>ALL</li>
          <li onClick={() => setCocktailCategory("Cocktail")}>COCKTAILS</li>
          <li onClick={() => setCocktailCategory("Punch / Party Drink")}>
            PUNCH
          </li>
          <li onClick={() => setCocktailCategory("Ordinary Drink")}>
            ORDINARY
          </li>
          <li onClick={() => setCocktailCategory("Shot")}>SHOT</li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
