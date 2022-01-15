import './cart.css'

export default function Cart() {
    return (
        <>
            <div className="CartWrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-9">

                            <div className="cart_items">
                                <div className="cart_head">
                                    <h4>Shopping Cart</h4>
                                    <p>Price</p>
                                </div>
                                <div className="product_details">
                                    <div className="cart_product">
                                        <img src="/images/paste-1.jpg" alt="cart_img" className="product_img_cart" />
                                        <div className="detail">
                                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quidem modi, aliquam, saepe nulla ut dicta quos laboriosam odio sit eos commodi voluptatum ex delectus dignissimos? In ipsum voluptate corporis.</h4>
                                            <span>In Stock</span>

                                            <select className="select_quntity">
                                                <option> Qty: 1</option>
                                                <option>1</option>
                                                <option>1</option>
                                                <option>1</option>
                                                <option>1</option>
                                            </select>

                                        </div>
                                    </div>
                                    <div className="cart_price">
                                        <h4>$ 14.90</h4>
                                    </div>

                                </div>
                                <hr />
                                <div className="cart_bottom">
                                    <h4 className="subtotal">Subtotal (1 item): <span className="total_price">$19.49</span></h4>
                                </div>

                            </div>


                        </div>
                        <div className="col-lg-3">
                            <div className="proceed_checkout">
                                <h4 className="subtotal_right">Subtotal (1 item): <span className="total_price">$19.49</span></h4>
                                <div className="gift">
                                    <input type="checkbox" />
                                    <span className="contain_gift ">This order contain gift</span>
                                </div>
                                <button  className="prceed_btn">proceed to checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
