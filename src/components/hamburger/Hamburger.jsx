import styles from "./index.module.scss";

const Hamburger = () => {
  return (
    <div className={styles.Hamburger}>
      <h4 className={styles.menuOption}>Story</h4>
      <h4 className={styles.menuOption}>Mission</h4>
      <h4 className={styles.menuOption}>Cocktails</h4>
      <h4 className={styles.menuOption}>Contacts</h4>
    </div>
  );
};

export default Hamburger;
