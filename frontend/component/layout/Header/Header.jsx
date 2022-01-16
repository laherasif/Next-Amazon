import styles from '../../../styles/Header.module.css';
import { BsSearch , BsFillCaretDownFill } from "react-icons/bs";
import { HiOutlineLocationMarker, } from "react-icons/hi";
import { RiShoppingCartLine } from "react-icons/ri";

const Header = () => {
  return (
    <>

      <nav className={styles.navbar}>
        <div className="container-fluid">
          <div className={styles.logo_amazon}>
            {/* <img src="/images/newlogo.png" className="logo_img" alt="logo" /> */}
              <div className={styles.amazon}></div>
            <div className={styles.locationWarpper}>
              <div className="location">
                <HiOutlineLocationMarker />
              </div>
              <div className={styles.texts}>
                <div className={styles.text}>Delivery to </div>
                <div className="desc">Pakistan </div>
              </div>
            </div>

          </div>

          <div className="input-group">
            <select className="input-group-text">
              <option>All </option>
              <option>All is well dont mind</option>
              <option>All</option>
              <option>All</option>
            </select>
            <input
              type={styles.text}
              className="form-control input_form"
              aria-label="Amount (to the nearest dollar)"
            />
            <button className="input-group-search">
            <BsSearch/>
            </button>
          </div>
          <div className={styles.locationWarpper}>
            <img src="images/pk.png" className="country_flag" alt="country" />
            <BsFillCaretDownFill className="flag_arrow_left"/>

          </div>

          <div className={styles.locationWarpper}>
            <div className={styles.texts}>
              <div className={styles.text}>Hello,Sign in</div> 
              <div className="sign_desc" >Accounts & Lists <BsFillCaretDownFill /> </div>
            </div>
           
          </div>
          <div className={styles.locationWarpper}>
          
            <div className={styles.texts}>
              <div className={styles.text}>Returns </div>
              <div className="return_desc">& Orders </div>
            </div>
          </div>
          <div className={styles.locationWarpper}>
              <RiShoppingCartLine className="shooping_Cart" />
              <div className="cart_desc">Cart </div>
          </div>


        </div>
      </nav>


    </>
  )
};

export default Header;
