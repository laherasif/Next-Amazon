import styles from '../../styles/Header.module.css';
import { BsSearch, BsFillCaretDownFill } from "react-icons/bs";
import { HiOutlineLocationMarker, } from "react-icons/hi";
import { RiShoppingCartLine } from "react-icons/ri";
import Link from 'next/link'
import Image from 'next/image'
const Header = () => {
  return (
    <>

      <nav className={`${styles.navbar_top} navbar navbar-expand-lg navbar-dark bg-dark`}>
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

            <div className={`${styles.input_group} input-group`}>
              <select className={`${ styles.input_text} input-group-text`}>
                <option>All </option>
                <option>All is well dont mind</option>
                <option>All</option>
                <option>All</option>
              </select>
              <input
                type="text"
                className="form-control input_form"
                aria-label="Amount (to the nearest dollar)"
              />
              <button className={styles.inputSearch}>
                <BsSearch />
              </button>
            </div>
            <div className={styles.locationWarpper}>
              <Image src="/images/pk.png" width={40} height={30} className={styles.country_flag} alt="country" />
              <BsFillCaretDownFill className="flag_arrow_left" />

            </div>

            <div className={styles.locationWarpper}>
              <div className={styles.texts}>
                <Link href="/login" passHref>
                    <div className={styles.text}>Hello,Sign in</div>
                </Link>
                    <div className="sign_desc" >Accounts & Lists <BsFillCaretDownFill /> </div>
              </div>

            </div>
            <div className={styles.locationWarpper}>

              <div className={styles.texts}>
                <div className={styles.text}>Returns </div>
                <div className="return_desc">& Orders </div>
              </div>
            </div>
            <Link href={`/cart`} passHref>
            <div className={styles.locationWarpper}>
              <RiShoppingCartLine className={styles.shooping_Cart} />
              <div className={styles.cart_desc}>Cart </div>
            </div>
            </Link>


        </div>
      </nav>


    </>
  )
};

export default Header;
