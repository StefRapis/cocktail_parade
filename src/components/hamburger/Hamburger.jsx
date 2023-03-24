import styles from "./index.module.scss";

const Hamburger = () => {
  return (
    <div className={styles.Hamburger}>
      <h4 className={styles.menuOption}>STORY</h4>
      <h4 className={styles.menuOption}>MISSION</h4>
      <h4 className={styles.menuOption}>CONTACTS</h4>
      <img className={styles.logo} src="Logo_white.png" alt="logo" />
    </div>
  );
};

export default Hamburger;
