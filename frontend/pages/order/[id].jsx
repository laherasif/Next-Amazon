import styles from '../../styles/checkout.module.css'

export default function Checkout() {
    return (
        <>
            <section className="checkoutWrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <h4 className="check_heading">Checkout Shopping</h4>
                            <hr />
                            <div className="shipping_address">
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
                            <h4 className="check_heading">Order Reviews</h4>
                            <hr />
                            <div className="order_review">
                                <ul className="orderlist">
                                    <li className="orderItems">
                                        <img src="/images/pc-1.jpg" alt="Order_image" className="order_img" />
                                        <p className="product_name"> Amazon Basics Kids/Youth Gaming Recliner with Headrest and Back Pillow, 3+ Age Group, Black and White </p>
                                        <span className="qunty_price"> Qunty : (2 x 19.45)  </span>
                                        <p className="total_price_singleP"> $ 190</p>
                                    </li>
                                </ul>

                                <div className="subtotal_price">
                                   Subtotal (2 item ) : <span className="subtotal_show">$ 2000</span>
                                </div>
                            </div>
                            <div className="order_place">
                              <button className="cash_on_del">Place Order</button>
                              <button className="paypal">Pay to Paypal</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
