/* 20-3-2023
 Esercizio 1
Sulla base della lezione del giorno, realizzare un'applicazione in react/vite che integri le api presenti al seguente endpoint https://www.thecocktaildb.com/api.php.

Lo stile può essere a piacere dello studente, ma obbligatorio:

utilizzare SASS
Avanzato
Spostare eventuale logica di filtri (come visto a lezione) dal componente principale (<App />) al componente che si occupa della lista stessa (caso della lezione, <Content />);

Per le liste presenti nel sito, creare un array di oggetti custom così da integrarli tramite map;

Creare una funzione che dalla API possa generare un array di stringhe, formato da ogni singolo ingrediente esistente come chiave all'interno di ogni singolo oggetto, raffigurante un cocktail.

///////////////////////////////////////////////////////////////////////////////////////////////////////// 

21-3-2023

Esercizio 1
Sulla base della lezione del giorno, rintracciare e creare tutte le variabili e i mixins necessari alla nostra applicazione. Chiaramente usare SASS.

Avanzato
Creare un componente che funga da 'simil-modale' al cui click su ogni singolo prodotto, mi apra la relativa scheda di informazioni.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

22-3-2023

Esercizio 1
Sulla base della lezione del giorno installare react-css-modules, e convertire la vostra applicazione utilizzando questo pacchetto.

cambiare in nome alle classi, adattandolo a css-module
Avanzato
Aggiungere un hamburger menu per il responsive

Aggiungere il footer

Completare lo stile secondo gusto personale; 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

23-3-2023

Esercizio 1
Sulla base della lezione del giorno, spostare il componente <Popup />all'interno del componente <App />, gestire la logica adeguandola al contesto e far scomparire il Popup dopo 2 secondi.

Attenzione: La modale per prenotare il posto, al click del pulsante Prenota! scompare!

Avanzato
Scrivere la logica relativa alla prenotazione, come visto durante la lezione.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

24-3-2023

Esercizio 1
Sulla base della lezione del giorno, modificare il componente <Hero /> adattandolo agli Styled Components.

Attenzione: Per questo componente non deve esistere alcun foglio di stile. Gestire eventuali mediaqueries sempre Styled Components.*/

import { useState, useEffect } from "react";
// import { GET } from "./utils/fetch";

import styles from "./App.module.scss";
// import "./App.scss";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Content from "./components/content";
import DrinkModal from "./components/drinkModal";
import Hamburger from "./components/hamburger";
import Reservation from "./components/reservation";
import Popup from "./components/popup";
import Footer from "./components/footer";

function App() {
  // useEffect(() => {
  //   GET("d").then(({ drinks }) => setCocktailList(() => drinks));
  // }, []);
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [cocktailCategory, setCocktailCategory] = useState("");
  const [reservationVisible, setReservationVisible] = useState(false);
  const [drinkByLetter, setDrinkByLetter] = useState("");

  // state per input di Reservation
  const [name, setName] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");

  const [popupOn, setPopupOn] = useState(false);

  // drinkModal racchiude in se sia il valore booleano che l'oggetto che inizialmente é vuoto.
  const [drinkModal, setDrinkModal] = useState({
    isVisible: false,
    payload: {},
  });
  const [cocktailList, setCocktailList] = useState([]);

  // // timeout per il popup
  // setTimeout(() => {
  //   setPopupOn(false);
  // }, 3000);

  return (
    <div className={styles.App}>
      <Navbar
        setBurgerMenu={setBurgerMenu}
        setReservationVisible={setReservationVisible}
      />
      {popupOn && (
        <Popup name={name} day={day} time={time} setPopupOn={setPopupOn} />
      )}
      {reservationVisible && (
        <Reservation
          setReservationVisible={setReservationVisible}
          name={name}
          day={day}
          time={time}
          setName={setName}
          setDay={setDay}
          setTime={setTime}
          setPopupOn={setPopupOn}
        />
      )}
      {burgerMenu ? <Hamburger /> : null}
      {drinkModal.isVisible ? (
        <DrinkModal
          setDrinkModal={setDrinkModal}
          payload={drinkModal.payload}
        />
      ) : (
        <>
          <Hero
            setCocktailCategory={setCocktailCategory}
            drinkByLetter={drinkByLetter}
            setDrinkByLetter={setDrinkByLetter}
          />
          <Content
            data={cocktailCategory}
            setDrinkModal={setDrinkModal}
            cocktailList={cocktailList}
            setCocktailList={setCocktailList}
            drinkByLetter={drinkByLetter}
          />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
