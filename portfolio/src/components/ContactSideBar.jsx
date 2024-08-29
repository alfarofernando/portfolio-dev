import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import styles from "./ContactSideBar.module.css";

function ContactSideBar() {
  return (
    <ButtonGroup vertical className={styles.contactButtonGroup}>
      <Button className={styles.contactButton} variant="link">
        <img src="../../public/assets/images/gato1.svg" alt="" />
      </Button>
      <Button className={styles.contactButton} variant="link">
        <img src="../../public/assets/images/gato1.svg" alt="" />
      </Button>
      <Button className={styles.contactButton} variant="link">
        <img src="../../public/assets/images/gato1.svg" alt="" />
      </Button>
      <Button className={styles.contactButton} variant="link">
        <img src="../../public/assets/images/gato1.svg" alt="" />
      </Button>
    </ButtonGroup>
  );
}

export default ContactSideBar;
