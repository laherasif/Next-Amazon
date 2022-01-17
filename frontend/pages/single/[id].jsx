import styles from '../../styles/single.module.css'
import Image from 'next/image'
export default function Single() {
    return (
        <>
            <section className={styles.singleWrapper}>
                <div className="container-fluid">
                    <div className={styles.add_img}>
                        <Image  src="/images/shopcar.png" object-Fit="contain" width={700} height={60} alt="add_image" className="amazon_add" />
                    </div>
                    <nav className={styles.nav_breadcrumb}>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">Home</li>
                            <li className="breadcrumb-item active" ariaCurrent="page">Library</li>
                        </ol>
                    </nav>
                    <div className="row">
                        <div className="col-md-4">
                            <div className={styles.single_image}>
                                <Image  src="/images/chair-1.jpg" object-Fit="cover" width="250px" height="250px" alt="single_image" className="single_img" />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className={styles.single_content}>
                                        <h4 className={styles.single_product_detail}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda ea laboriosam, voluptate quia sunt numquam explicabo totam quasi incidunt quos dicta officiis repudiandae error temporibus, quae voluptates excepturi consequatur impedit.</h4>
                                        <p className="price">$ 14.40</p>
                                        <h5>Decription </h5>
                                        <p>this is new product</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className={styles.addCart_content}>

                                        <p className={styles.real_price}>$ 205.25</p>
                                        <span className={styles.delivery}>Delivery January 19 - 28  </span>

                                        <span className={styles.in_stock}>In Stock</span>

                                        <select className={styles.select_singl_qunty}>
                                            <option> Qty: 1</option>
                                            <option>1</option>
                                            <option>1</option>
                                            <option>1</option>
                                            <option>1</option>
                                        </select>

                                        <button className={styles.add_cart}>Add to Cart</button>
                                        <button className={styles.buy_cart}>Buy Now</button>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
