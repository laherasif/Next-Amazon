
import styles from '../../../styles/Footer.module.css'

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="footer_list">
                <ul className="lists">
                  <p>Get to Know Us </p>
                  <li className="listItem">Genu </li>
                  <li className="listItem">Genu </li>
                  <li className="listItem">Genu </li>
                  <li className="listItem">Genu </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer_list">
                <ul className="lists">
                  <p>Make Money with Us </p>
                  <li className="listItem">Genu </li>
                  <li className="listItem">Genu </li>
                  <li className="listItem">Genu </li>
                  <li className="listItem">Genu </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer_list">
                <ul className="lists">
                  <p>Amazone Payment Products</p>
                  <li className="listItem">Genu </li>
                  <li className="listItem">Genu </li>
                  <li className="listItem">Genu </li>
                  <li className="listItem">Genu </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer_list">
                <ul className="lists">
                  <p>Let Us Help You </p>
                  <li className="listItem">Genu </li>
                  <li className="listItem">Genu </li>
                  <li className="listItem">Genu </li>
                  <li className="listItem">Genu </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="footer_hr" />
        <div className="container">
          <div className="bottom_footer ">
            <ul className="bottom_list">
              <li className="bottom_listItems">
            </li>
              <li className="bottom_listItem">
               English
            </li>
              <li className="bottom_listItem">
                $ USD - U.S Dollar
            </li>
              <li className="bottom_listItem">
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
