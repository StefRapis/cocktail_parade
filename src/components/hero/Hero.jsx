// import styles from "./index.module.scss";
import styled from "styled-components";

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 130px;
  margin-bottom: 200px;
  height: 550px;
  width: 100%;
  background-image: url("https://images.pexels.com/photos/6544066/pexels-photo-6544066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
  background-size: 100% auto;
  background-position-x: center;
  background-position-y: 100%;
  @media screen and (max-width: 850px) {
    background-size: cover;
    background-position-x: center;
    background-position-y: 10%;
  }
`;

const HeroTitle = styled.div`
  font-size: 5.9rem;
  position: absolute;
  bottom: -8px;
  font-family: "Lobster", cursive;
  z-index: 2;
  color: white;
  text-shadow: 3px 0px 2px rgba(240, 99, 116, 0.725);
  @media screen and (max-width: 850px) {
    text-align: center;
    line-height: 1;
    top: 370px;
    max-width: 500px;
    font-size: 5.5rem;
  }
  @media screen and (max-width: 450px) {
    line-height: 0.8;
    top: 330px;
  }
`;

const HeroCategories = styled.div`
  background-color: #f96160;
  border-radius: 40px;
  padding: 18px 50px;
  font-size: 1rem;
  position: absolute;
  bottom: -52px;
  @media screen and (max-width: 450px) {
    width: 100vw;
    padding: 18px 0;
  }
`;

const HeroUl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 0;
  @media screen and (max-width: 850px) {
    gap: 25px;
  }

  & li {
    list-style-type: none;
    color: white;
    cursor: pointer;
    font-size: 1.3rem;
    @media screen and (max-width: 450px) {
      font-size: 1.1rem;
    }

    &:hover {
      transform: scale(1.3);
      text-decoration: double;
      transition: all 0.35s;
    }
  }
`;

const HeroLetter = styled.div`
  position: absolute;
  bottom: -103px;
  display: flex;

  & select {
    background-color: #ffb728;
    border: 0px;
    padding: 10px;
    font-size: 1.6rem;
    outline: none;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    font-family: "Lobster", cursive;
    color: white;
    appearance: none;
    text-align: center;
    cursor: pointer;
  }
`;

const Hero = ({ setCocktailCategory, drinkByLetter, setDrinkByLetter }) => {
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const options = letters.map((letter) => (
    <option value={letter}>{letter}</option>
  ));

  const saveLetter = (event) => {
    event.preventDefault();
    setDrinkByLetter(event.target.value);
    console.log(drinkByLetter);
  };

  return (
    <HeroWrapper>
      <HeroTitle>What's your flavour?</HeroTitle>
      <HeroCategories>
        <HeroUl>
          <li onClick={() => setCocktailCategory("")}>ALL</li>
          <li onClick={() => setCocktailCategory("Cocktail")}>COCKTAILS</li>
          <li onClick={() => setCocktailCategory("Punch / Party Drink")}>
            PUNCH
          </li>
          <li onClick={() => setCocktailCategory("Ordinary Drink")}>
            ORDINARY
          </li>
          <li onClick={() => setCocktailCategory("Shot")}>SHOT</li>
        </HeroUl>
      </HeroCategories>
      <HeroLetter>
        <select name="letter" id="letter" onChange={saveLetter}>
          {options}
        </select>
      </HeroLetter>
    </HeroWrapper>
  );
};

export default Hero;

////////////////////// VECCHIO CODICE PER SASS E CSS MODULES //////////////////////////////

// return (
//   <div className={styles.Hero}>
//     {/* <img
//       className={styles.img}
//       src="https://images.unsplash.com/photo-1592858321831-dabeabc2dd65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
//       alt="cocktails"
//     /> */}
//     <h1 className={styles.title}>What's your flavour?</h1>
//     <div className={styles.categories}>
//       <ul>
// <li onClick={() => setCocktailCategory("")}>ALL</li>
// <li onClick={() => setCocktailCategory("Cocktail")}>COCKTAILS</li>
// <li onClick={() => setCocktailCategory("Punch / Party Drink")}>
//   PUNCH
// </li>
// <li onClick={() => setCocktailCategory("Ordinary Drink")}>
//   ORDINARY
// </li>
// <li onClick={() => setCocktailCategory("Shot")}>SHOT</li>
//       </ul>
//     </div>
//   </div>
// );
