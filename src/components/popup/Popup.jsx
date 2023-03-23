import styles from "./index.module.scss";

const Popup = ({ name, day, time, setPopupOn }) => {
  setTimeout(() => {
    setPopupOn(false);
  }, 2000);

  return (
    <div className={styles.Popup}>
      <p>
        Thank You! Your booking has been submitted. See you on {day}, {time}, Mr
        {name}!
      </p>
    </div>
  );
};

export default Popup;
