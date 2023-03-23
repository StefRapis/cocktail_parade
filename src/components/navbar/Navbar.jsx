import styles from "./index.module.scss";

import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Navbar = ({ setBurgerMenu, setReservationVisible }) => {
  const openBurgerMenu = () => {
    setBurgerMenu((prev) => !prev);
  };

  const openReservation = () => {
    setReservationVisible(true);
  };

  return (
    <div className={styles.Navbar}>
      <HiOutlineMenuAlt1 className={styles.burger} onClick={openBurgerMenu} />
      <ul className={styles.menu}>
        <li>Story</li>
        <li>Mission</li>
        <li>Contacts</li>
      </ul>

      <img
        className={styles.logo}
        src="src\assets\Logo cocktail parade.png"
        alt="logo"
      />

      <button onClick={openReservation}>Book a table</button>
      {/* <div className={styles.social}>
        <img
          className={styles.img}
          src="https://img.icons8.com/ios/512/facebook-new.png"
          alt="facebook logo"
        />
        <img
          className={styles.img}
          src="https://img.icons8.com/material-outlined/512/instagram-new.png"
          alt="instagram logo"
        />
        <img
          className={styles.img}
          src="https://img.icons8.com/ios/512/twitter.png"
          alt="twitter logo"
        /> */}
      {/* </div> */}
    </div>
  );
};

export default Navbar;
