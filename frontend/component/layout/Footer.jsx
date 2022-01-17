
import styles from '../../styles/Footer.module.css'

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="footer_list">
                <ul className={styles.lists}>
                  <p>Get to Know Us </p>
                  <li className={styles.listItem}>Genu </li>
                  <li className={styles.listItem}>Genu </li>
                  <li className={styles.listItem}>Genu </li>
                  <li className={styles.listItem}>Genu </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer_list">
                <ul className={styles.lists}>
                  <p>Make Money with Us </p>
                  <li className={styles.listItem}>Genu </li>
                  <li className={styles.listItem}>Genu </li>
                  <li className={styles.listItem}>Genu </li>
                  <li className={styles.listItem}>Genu </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer_list">
                <ul className={styles.lists}>
                  <p>Amazone Payment Products</p>
                  <li className={styles.listItem}>Genu </li>
                  <li className={styles.listItem}>Genu </li>
                  <li className={styles.listItem}>Genu </li>
                  <li className={styles.listItem}>Genu </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer_list">
                <ul className={styles.lists}>
                  <p>Let Us Help You </p>
                  <li className={styles.listItem}>Genu </li>
                  <li className={styles.listItem}>Genu </li>
                  <li className={styles.listItem}>Genu </li>
                  <li className={styles.listItem}>Genu </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className={styles.bottom_footer}>
            <ul className={styles.bottom_list}>
              <li className={styles.bottom_listItems}>
            </li>
              <li className={styles.bottom_listItem}>
               English
            </li>
              <li className={styles.bottom_listItem}>
                $ USD - U.S Dollar
            </li>
              <li className={styles.bottom_listItem}>
               United State
            </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
