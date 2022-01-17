import styles  from '../../styles/product.module.css'
import { BsFillCaretDownFill } from "react-icons/bs";
import Image from 'next/image'
export default function Products() {
    console.log("product page ");

    return (
        <>
            <div className={styles.ProductWrapper}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 col-lg-2">
                            <div className="sidebar_filter">
                                <div className={styles.filter}>
                                    Filters
                                </div>
                                <hr />
                                <div className="filter_list">
                                    <ul className={styles.Lists}>
                                        <li className={styles.listItemss} data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
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
                                <div className={styles.about_desc}>
                                    Price and other details may vary base on product size and color
                                </div>
                                <div className={styles.products_list}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <div className={styles.product_data}>
                                                    <Image src="/images/chair-1.jpg" width="200px" height="200px"   alt="product_img" />
                                                    <p className={styles.feature_brand}>Feature from our brand</p>
                                                    <h3 className={styles.product_desc}>Amazon Basics Kids/Youth Gaming Recliner with Headrest and Back Pillow, 3+ Age Group, Black and White</h3>

                                                    <span className={styles.price}>$205 </span>
                                                    <span className={styles.ships}>Ships to Pakistan</span>
                                                </div>
                                                <hr />
                                            </div>
                                            <div className="col-md-3">
                                                <div className={styles.product_data}>
                                                    <Image src="/images/chair-1.jpg" width="200px" height="200px"   alt="product_img" />
                                                    <p className={styles.feature_brand}>Feature from our brand</p>
                                                    <h3 className={styles.product_desc}>Amazon Basics Kids/Youth Gaming Recliner with Headrest and Back Pillow, 3+ Age Group, Black and White</h3>

                                                    <span className={styles.price}>$205 </span>
                                                    <span className={styles.ships}>Ships to Pakistan</span>
                                                </div>
                                                <hr />
                                            </div>
                                            <div className="col-md-3">
                                                <div className={styles.product_data}>
                                                    <Image src="/images/chair-1.jpg" width="200px" height="250px"   alt="product_img" />
                                                    <p className={styles.feature_brand}>Feature from our brand</p>
                                                    <h3 className={styles.product_desc}>Amazon Basics Kids/Youth Gaming Recliner with Headrest and Back Pillow, 3+ Age Group, Black and White</h3>

                                                    <span className={styles.price}>$205 </span>
                                                    <span className={styles.ships}>Ships to Pakistan</span>
                                                </div>
                                                <hr />
                                            </div>
                                            <div className="col-md-3">
                                                <div className={styles.product_data}>
                                                    <Image src="/images/chair-1.jpg" width="200px" height="200px"   alt="product_img" />
                                                    <p className={styles.feature_brand}>Feature from our brand</p>
                                                    <h3 className={styles.product_desc}>Amazon Basics Kids/Youth Gaming Recliner with Headrest and Back Pillow, 3+ Age Group, Black and White</h3>

                                                    <span className={styles.price}>$205 </span>
                                                    <span className={styles.ships}>Ships to Pakistan</span>
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
