import styles from '../../styles/checkout.module.css'
import Image from 'next/image'
export default function Checkout() {
    return (
        <>
            <section className={styles.checkoutWrapper}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <h4 className={styles.check_heading}>Checkout Shopping</h4>
                            <hr />
                            <div className={styles.shipping_address}>
                                <form>
                                    <div className="mb-2">
                                        <label className="form-label">Your name</label>
                                        <input type="email" className="form-control" />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label">Email Address </label>
                                        <input type="email" className="form-control" />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label">Shipping Address </label>
                                        <input type="email" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Mobile number</label>
                                        <input type="email" className="form-control" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h4 className={styles.check_heading}>Order Reviews</h4>
                            <hr />
                            <div className={styles.order_review}>
                                <ul className={styles.orderlist}>
                                    <li className={styles.orderItems}>
                                        <Image src="/images/pc-1.jpg" width={100} height={80} alt="Order_image" className="order_img" />
                                        <p className={styles.product_name}> Amazon Basics Kids/Youth Gaming Recliner with Headrest and Back Pillow, 3+ Age Group, Black and White </p>
                                        <span className={styles.qunty_price}> Qty : (2 x 19.45)  </span>
                                        <p className={styles.total_price_singleP}> $ 190</p>
                                    </li>
                                </ul>

                                <div className={styles.subtotal_price}>
                                   Subtotal (2 item ) : <span className={styles.subtotal_show}>$ 2000</span>
                                </div>
                            </div>
                            <div className={styles.order_place}>
                              <button className={styles.cash_on_del}>Place Order</button>
                              <button className={styles.paypal}>Pay to Paypal</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
