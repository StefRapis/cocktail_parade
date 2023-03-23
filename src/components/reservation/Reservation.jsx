import styles from "./index.module.scss";
import Popup from "../popup";

import { useState } from "react";

const Reservation = ({ setReservationVisible }) => {
  const [name, setName] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");

  const closeFromOverlay = () => {
    setReservationVisible(false);
  };

  // state per visibilita popup
  const [popupOn, setPopupOn] = useState(false);

  // salvataggio input
  const saveName = (event) => {
    setName(event.target.value);
  };

  const saveDay = (event) => {
    setDay(event.target.value);
  };

  const saveTime = (event) => {
    setTime(event.target.value);
  };

  // azione al click del pulsante "Book"
  const onHandleSubmit = (event) => {
    event.preventDefault();
    console.log(name, day, time);
    setPopupOn(true);
  };

  return (
    <div className={styles.Reservation}>
      <div className={styles.overlay} onClick={closeFromOverlay}></div>
      <div className={styles.content}>
        <h2>Try our Cocktails!</h2>
        <form className={styles.form} onSubmit={onHandleSubmit}>
          <label className={styles.labels} htmlFor="text">
            Your name
          </label>
          <input
            type="text"
            id="text"
            name="text"
            placeholder="Type here"
            value={name}
            onChange={saveName}
            required
          />
          <label className={styles.labels} htmlFor="date">
            Which day?
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={day}
            onChange={saveDay}
            required
          />
          <label className={styles.labels} htmlFor="time">
            What time?
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={time}
            onChange={saveTime}
            required
          />
          <input className={styles.button} type="submit" value={"Book"} />
        </form>
        {popupOn && (
          <Popup name={name} day={day} time={time} setPopupOn={setPopupOn} />
        )}
      </div>
    </div>
  );
};

export default Reservation;
