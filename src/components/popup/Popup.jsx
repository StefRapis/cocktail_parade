import styles from "./index.module.scss";
import { useEffect } from "react";

const Popup = ({ name, day, time, setPopupOn }) => {
  // timeout per il popup che viene eseguito quando il comp. viene montato.
  useEffect(() => {
    setTimeout(() => {
      setPopupOn(false);
    }, 3000);
  }, []);

  return (
    <div className={styles.Popup}>
      <h3>Booking submitted!</h3>
      <p>
        See you on {day} at {time} {name}!
      </p>
    </div>
  );
};

export default Popup;
