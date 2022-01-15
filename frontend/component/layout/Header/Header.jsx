import "./Header.css";
import { BsSearch , BsFillCaretDownFill } from "react-icons/bs";
import { HiOutlineLocationMarker, } from "react-icons/hi";
import { RiShoppingCartLine } from "react-icons/ri";

const Header = () => {
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="logo_amazon">
            {/* <img src="/images/newlogo.png" className="logo_img" alt="logo" /> */}
              <div className="amazon"></div>
            <div className="locationWarpper ">
              <div className="location">
                <HiOutlineLocationMarker />
              </div>
              <div className="texts">
                <div className="text">Delivery to </div>
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
              type="text"
              className="form-control input_form"
              aria-label="Amount (to the nearest dollar)"
            />
            <button className="input-group-search">
            <BsSearch/>
            </button>
          </div>
          <div className="locationWarpper">
            <img src="images/pk.png" className="country_flag" alt="country" />
            <BsFillCaretDownFill className="flag_arrow_left"/>

          </div>

          <div className="locationWarpper">
            <div className="texts">
              <div className="text">Hello,Sign in</div> 
              <div className="sign_desc" >Accounts & Lists <BsFillCaretDownFill /> </div>
            </div>
           
          </div>
          <div className="locationWarpper">
          
            <div className="texts">
              <div className="text">Returns </div>
              <div className="return_desc">& Orders </div>
            </div>
          </div>
          <div className="locationWarpper">
              <RiShoppingCartLine className="shooping_Cart" />
              <div className="cart_desc">Cart </div>
          </div>


        </div>
      </nav>


    </>
  )
};

export default Header;
