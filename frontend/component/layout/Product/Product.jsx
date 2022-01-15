import './product.css'
import { BsFillCaretDownFill } from "react-icons/bs";

export default function Products() {
    console.log("product page ");

    return (
        <>
            <div className="ProductWrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 col-lg-2">
                            <div className="sidebar_filter">
                                <div className="filter">
                                    Filters
                                </div>
                                <hr />
                                <div className="filter_list">
                                    <ul className="Lists">
                                        <li className="listItemss" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            Prime & Delivery
                                            <BsFillCaretDownFill />

                                            <div className="collapse" id="collapseExample">
                                               <ul>
                                                   <li>hellow</li>
                                                   <li>hellow</li>
                                                   <li>hellow</li>
                                               </ul>
                                            </div>

                                        </li>
                                        <hr/>
                                        {/* <li className="listItemss">
                                            Prime & Delivery
                                            <BsFillCaretDownFill/>

                                </li>
                                        <li className="listItemss">
                                            Prime & Delivery
                                            <BsFillCaretDownFill/>

                                </li>
                                        <li className="listItemss">
                                            Prime & Delivery
                                            <BsFillCaretDownFill/>

                                </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 col-lg-10">
                            <div className="products">
                                <div className="about_desc">
                                    Price and other details may vary base on product size and color
                                </div>
                                <div className="products_list">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <div className="product_data">
                                                    <img src="/images/chair-1.jpg" className="product_images" alt="product_img" />
                                                    <p className="feature_brand">Feature from our brand</p>
                                                    <h3 className="product_desc">Amazon Basics Kids/Youth Gaming Recliner with Headrest and Back Pillow, 3+ Age Group, Black and White</h3>

                                                    <span className="price">$205 </span>
                                                    <span className="ships">Ships to Pakistan</span>
                                                </div>
                                                <hr />
                                            </div>
                                            <div className="col-md-3">
                                                <div className="product_data">
                                                    <img src="/images/chair-1.jpg" className="product_images" alt="product_img" />
                                                    <p className="feature_brand">Feature from our brand</p>
                                                    <h3 className="product_desc">Amazon Basics Kids/Youth Gaming Recliner with Headrest and Back Pillow, 3+ Age Group, Black and White</h3>

                                                    <span className="price">$205 </span>
                                                    <span className="ships">Ships to Pakistan</span>
                                                </div>
                                                <hr />
                                            </div>
                                            <div className="col-md-3">
                                                <div className="product_data">
                                                    <img src="/images/chair-1.jpg" className="product_images" alt="product_img" />
                                                    <p className="feature_brand">Feature from our brand</p>
                                                    <h3 className="product_desc">Amazon Basics Kids/Youth Gaming Recliner with Headrest and Back Pillow, 3+ Age Group, Black and White</h3>

                                                    <span className="price">$205 </span>
                                                    <span className="ships">Ships to Pakistan</span>
                                                </div>
                                                <hr />
                                            </div>
                                            <div className="col-md-3">
                                                <div className="product_data">
                                                    <img src="/images/chair-1.jpg" className="product_images" alt="product_img" />
                                                    <p className="feature_brand">Feature from our brand</p>
                                                    <h3 className="product_desc">Amazon Basics Kids/Youth Gaming Recliner with Headrest and Back Pillow, 3+ Age Group, Black and White</h3>

                                                    <span className="price">$205 </span>
                                                    <span className="ships">Ships to Pakistan</span>
                                                </div>
                                                <hr />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
