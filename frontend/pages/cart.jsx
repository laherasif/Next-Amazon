import styles from '../styles/cart.module.css'
import Image from 'next/image'
import Link from 'next/link'
export default function Cart() {
    return (
        <>
            <div className="CartWrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-9">

                            <div className={styles.cart_items}>
                                <div className={styles.cart_head}>
                                    <h4>Shopping Cart</h4>
                                    <p>Price</p>
                                </div>
                                <div className={styles.product_details}>
                                    <div className={styles.cart_product}>
                                    <Image src="/images/paste-1.jpg" width={300} height={100} alt="cart_img" className="product_img_cart" />
                                        <div className={styles.detail}>
                                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quidem modi, aliquam, saepe nulla ut dicta quos laboriosam odio sit eos commodi voluptatum ex delectus dignissimos? In ipsum voluptate corporis.</h4>
                                            <span>In Stock</span>

                                            <select className={styles.select_quntity}>
                                                <option> Qty: 1</option>
                                                <option>1</option>
                                                <option>1</option>
                                                <option>1</option>
                                                <option>1</option>
                                            </select>

                                        </div>
                                    </div>
                                    <div className={styles.cart_price}>
                                        <h4>$ 14.90</h4>
                                    </div>

                                </div>
                                <hr />
                                <div className={styles.cart_bottom}>
                                    <h4 className={styles.subtotal}>Subtotal (1 item): <span className={styles.total_price}>$19.49</span></h4>
                                </div>

                            </div>


                        </div>
                        <div className="col-lg-3">
                            <div className={styles.proceed_checkout}>
                                <h4 className={styles.subtotal_right}>Subtotal (1 item): <span className={styles.total_price}>$19.49</span></h4>
                                <div className={styles.gift}>
                                    <input type="checkbox" />
                                    <span className={styles.contain_gift}>This order contain gift</span>
                                </div>
                                <Link href="/order/order"  >
                                <button  className={styles.prceed_btn}>proceed to checkout</button>
                                </Link>
                            </div>
 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
